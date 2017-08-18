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


## Remote
---

###
```
scp {user}@{server}:{remote-path} {local-path}

e.g:
scp thanos_marvel@dum-d-di-app-001:/opt/hybrid/bin/custom/rando/bin/rando.jar /Users/thanos/Downloads
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
