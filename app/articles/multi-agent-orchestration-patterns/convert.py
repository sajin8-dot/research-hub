#!/usr/bin/env python3
import re
import sys

def markdown_to_jsx(md):
    # Split by lines
    lines = md.split('\n')
    jsx_lines = []
    in_code = False
    code_lang = ''
    code_content = []
    in_table = False
    table_rows = []
    
    for line in lines:
        # Detect code block start/end
        if line.startswith('```'):
            if not in_code:
                in_code = True
                code_lang = line[3:].strip()
                code_content = []
            else:
                # End code block
                in_code = False
                # Render code block
                lang_class = f'language-{code_lang}' if code_lang else ''
                jsx_lines.append(f'<pre className="code-block"><code className="{lang_class}">')
                jsx_lines.append('{`' + '\n'.join(code_content) + '`}')
                jsx_lines.append('</code></pre>')
            continue
        
        if in_code:
            code_content.append(line)
            continue
        
        # Headings
        if line.startswith('# '):
            jsx_lines.append(f'<h2>{line[2:]}</h2>')
        elif line.startswith('## '):
            jsx_lines.append(f'<h3>{line[3:]}</h3>')
        elif line.startswith('### '):
            jsx_lines.append(f'<h4>{line[4:]}</h4>')
        elif line.startswith('#### '):
            jsx_lines.append(f'<h5>{line[5:]}</h5>')
        elif line.startswith('##### '):
            jsx_lines.append(f'<h6>{line[6:]}</h6>')
        # Horizontal rule
        elif line.strip() == '---':
            jsx_lines.append('<hr />')
        # Lists (simple detection)
        elif line.strip().startswith('- '):
            # We'll need to handle nested lists later; for now, simple
            jsx_lines.append(f'<li>{line[2:]}</li>')
        else:
            # Paragraph
            if line.strip():
                # Replace inline code
                line = re.sub(r'`([^`]+)`', r'<code>\1</code>', line)
                # Replace bold/italic? Not needed.
                jsx_lines.append(f'<p>{line}</p>')
            else:
                jsx_lines.append('')
    
    # Join lines
    jsx = '\n'.join(jsx_lines)
    # Wrap lists: group consecutive li items
    jsx = re.sub(r'(<li>.*?</li>\n)+', lambda m: '<ul>' + m.group(0) + '</ul>', jsx, flags=re.DOTALL)
    return jsx

if __name__ == '__main__':
    with open('/data/.openclaw/workspace/sebs_stack_article.md', 'r') as f:
        md = f.read()
    # Remove the title and subtitle (first line)
    lines = md.split('\n')
    # Skip first line (title) and second line (empty?) and third line (subtitle?)
    # We'll just take from after the first heading
    # Find the first '---' horizontal rule
    start = 0
    for i, line in enumerate(lines):
        if line.strip() == '---':
            start = i + 1
            break
    md_body = '\n'.join(lines[start:])
    jsx = markdown_to_jsx(md_body)
    print(jsx)