const dhams=["Vadtal", "Bhuj", "Junagadh", "Dhodka", "Gadhpur", "Ahemdabad"];

for(const n of dhams){
    console.log(n);
}


const gurukuls={
    ksd: "Akshaygadh",
    srt: "Surat",
    jnd: "Junagadh",
    rjkt: "Rajkot",
    vng: "Vidhyanagar",
    hbd: "Haidrabad",
    bnr: "Bhavnagar",
    dls: "Dallas"
}

for(const n in gurukuls){
    console.log(`${n}: ${gurukuls[n]}`);
}