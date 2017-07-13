## Generating Timestamps
---

date +%s

## Compress
---

### zip
```
zip -r {zip-file-name-with-extension} {directory}/
```

### tar
```
tar -czvf {zip-file-name-with-extension} {directory}
```

## Uncompress
---

### tar
```
tar -xzvf {directory}
```

## Misc
---
### Image to DataURI
```
curl --silent --insecure {url} | base64
```

then append to:
```
"data:image/gif;base64,{base64-data}"
```
