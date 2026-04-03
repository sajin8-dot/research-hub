#!/usr/bin/env python3
import sys

with open('app/articles/venue-upgrade/page.tsx', 'r') as f:
    lines = f.readlines()

# Find start and end indices
start = None
end = None
for i, line in enumerate(lines):
    if '<h2 id="videos">' in line:
        start = i
        break
if start is None:
    sys.exit("Video section not found")

# Find next h2 after start
for i in range(start + 1, len(lines)):
    if lines[i].strip().startswith('<h2 id='):
        end = i
        break
if end is None:
    sys.exit("Next h2 not found")

print(f"Video section lines {start} to {end-1}")

# Wrap with container-article
new_lines = lines[:start]
new_lines.append('          <div className="container-article">\n')
new_lines.extend(lines[start:end])
new_lines.append('          </div>\n')
new_lines.extend(lines[end:])

with open('app/articles/venue-upgrade/page.tsx', 'w') as f:
    f.writelines(new_lines)

print("Wrapped video section in container-article.")