import { airPollutant, area } from "../types";

const airPollutants: airPollutant[] =
    [{ symbol: "SO₂", name: "二酸化硫黄" }, { symbol: "NO₂", name: "二酸化窒素" },
    { symbol: "NOx", name: "窒素酸化物" }, { symbol: "SPM", name: "浮遊粒子状物質" }];

const airPollutants2: airPollutant[] =
    [{ symbol: "SO₂", name: "二酸化硫黄" }, { symbol: "NOx", name: "窒素酸化物" }];

const areas: area[] =
    [{ name: "田鶴浜", gridItem: "item-c" }, { name: "鹿島", gridItem: "item-d" },
    { name: "能登島", gridItem: "item-e" }, { name: "石崎", gridItem: "item-f" },
    { name: "大田", gridItem: "item-g" }, { name: "七尾", gridItem: "item-h" }];

const detailRowItems: string[] = [
    "風速", "0.1m/s", "風向", "16方位", "気温", "0.1℃"
];

const detailColItems: string[] = [
    "地上", "96m", "147m", "183m"
];


export { airPollutants, airPollutants2, areas, detailRowItems, detailColItems };