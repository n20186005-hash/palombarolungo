# Published photograph

The sole published photograph is `public/photos/palombaro-lungo-theklan.jpg`. Its title, author, date, source revision, license, size and SHA-256 are recorded in `public/photos/credits.json`. The Wikimedia Commons file description identifies Theklan as the author, the image as own work, and CC BY-SA 4.0 as its license. This was checked on 3 November 2026 UTC. The image itself was inspected and shows the underground interior and metal walkway. The file is unchanged; CSS displays the whole photograph without cropping. The bilingual visible caption links the author, original file page and license, and explains that this 2014 photograph does not establish current visiting conditions.

Reproduce the download with:

```sh
curl -fL 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Palombaro_Lungo%2C_Matera%2C_Italia.jpg' -o public/photos/palombaro-lungo-theklan.jpg
```

The environment's default Wikimedia address timed out; the successful fetch used `--resolve upload.wikimedia.org:443:208.80.154.240` with the same HTTPS hostname and certificate validation enabled. Verify bytes against `credits.json` after fetching.

# Retired legacy assets

The 15 numbered JPGs previously in `public/gallery/` are no longer public assets. Their exact bytes are preserved in an archive outside the publication tree, and their earlier Git history remains available (original addition: `20644a2cb52cfd689801844b92283838f515406e`). Per-file sources, authors and permissions were not established from the available repository evidence. This is an unresolved evidence gap, not a finding about infringement or ownership. The old captions were removed because they described underground scenes while the first six images showed outdoor scenes.
