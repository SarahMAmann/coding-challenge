export default {
    keys: [
        "count"
    ],
    margin: {
        "top": 50,
        "right": 130,
        "bottom": 50,
        "left": 60
    },
    axisBottom: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "hour",
        "legendPosition": "middle",
        "legendOffset": 32
    },
    axisLeft: {
        "tickSize": 5,
        "tickPadding": 5,
        "tickRotation": 0,
        "legend": "parts",
        "legendPosition": "middle",
        "legendOffset": -40
    },
    legends: [
        {
            "dataFrom": "keys",
            "anchor": "bottom-right",
            "direction": "column",
            "justify": false,
            "translateX": 120,
            "translateY": 0,
            "itemsSpacing": 2,
            "itemWidth": 100,
            "itemHeight": 20,
            "itemDirection": "left-to-right",
            "itemOpacity": 0.85,
            "symbolSize": 20,
            "effects": [
                {
                    "on": "hover",
                    "style": {
                        "itemOpacity": 1
                    }
                }
            ]
        }
    ]
}