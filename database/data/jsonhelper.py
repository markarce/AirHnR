import json

tobe = []
with open('./ny_lat_long.txt', 'r') as f:
    for line in f:
        ll = [x for x in line.split(',')]
        tobe.append({"latitude": ll[1], "longitude": ll[3]})

with open ('./ny_lat_long.json', 'w') as ofile:
    json.dump(tobe, ofile)

import json

tobe = []
with open('./sf_lat_long.txt', 'r') as f:
    for line in f:
        ll = [x for x in line.split(',')]
        tobe.append({"latitude": ll[1], "longitude": ll[3]})

with open ('./sf_lat_long.json', 'w') as ofile:
    json.dump(tobe, ofile)
