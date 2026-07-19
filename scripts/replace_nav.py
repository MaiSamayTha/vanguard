import os

files = ['leadership.html', 'programs.html', 'academy.html', 'impact.html', 'get-involved.html', 'portal.html']

for file in files:
    if not os.path.exists(file):
        continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Replace HTML
    # We look for the start of the skip link and the end of either search overlay or mobile panel (for portal.html)
    start_marker = "<!-- ============ SKIP LINK ============ -->"
    
    if "<!-- ============ SEARCH OVERLAY ============ -->" in content:
        # find end of search overlay
        end_search_idx = content.find("<!-- ============ SEARCH OVERLAY ============ -->")
        end_div_idx = content.find("</div>\n</div>", end_search_idx) + len("</div>\n</div>")
        end_idx = content.find("\n", end_div_idx) + 1
    else:
        # no search overlay, find end of mobile panel
        end_panel_idx = content.find("<!-- ============ MOBILE PANEL ============ -->")
        end_aside_idx = content.find("</aside>", end_panel_idx) + len("</aside>")
        end_idx = content.find("\n", end_aside_idx) + 1
        
    start_idx = content.find(start_marker)
    
    if start_idx != -1 and end_idx != -1:
        new_html = "<!-- ============ VANGUARD NAV COMPONENT ============ -->\n<vanguard-nav></vanguard-nav>\n"
        content = content[:start_idx] + new_html + content[end_idx:]
    else:
        print(f"Could not find HTML boundaries in {file}")

    # 2. Replace JS
    if file == 'portal.html':
        start_js = "/* ============ MOBILE MENU ============ */"
        end_js = "document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});\n"
        s_idx = content.find(start_js)
        e_idx = content.find(end_js) + len(end_js)
        if s_idx != -1 and e_idx != -1:
            content = content[:s_idx] + content[e_idx:]
            
        # also insert script tag
        script_insert = "<script src=\"assets/nav-component.js\"></script>\n"
        # insert before <script>
        script_tag = "<script>\n"
        tag_idx = content.find(script_tag)
        if tag_idx != -1:
            content = content[:tag_idx] + script_insert + content[tag_idx:]
    else:
        start_js = "/* ============ NAV SCROLL SHADOW ============ */"
        end_js = "document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSearch();closeMenu()}});\n"
        s_idx = content.find(start_js)
        e_idx = content.find(end_js) + len(end_js)
        
        if s_idx != -1 and e_idx != -1:
            content = content[:s_idx] + content[e_idx:]
            
        script_insert = "<script src=\"assets/nav-component.js\"></script>\n"
        # insert before <script>
        cf_script = "<script data-cfasync=\"false\" src=\"/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js\"></script>"
        tag_idx = content.find(cf_script)
        if tag_idx != -1:
            content = content[:tag_idx] + script_insert + content[tag_idx:]
            
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {file}")
