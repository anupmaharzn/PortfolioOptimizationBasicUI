const xlabels = [
    "2/1/2010",
    "3/1/2010",
    "4/1/2010",
    "5/1/2010",
    "6/1/2010",
    "7/1/2010",
    "8/1/2010",
    "9/1/2010",
    "10/1/2010",
    "11/1/2010",
    "12/1/2010",
    "1/1/2011",
    "2/1/2011",
    "3/1/2011",
    "4/1/2011",
    "5/1/2011",
    "6/1/2011",
    "7/1/2011",
    "8/1/2011",
    "9/1/2011",
    "10/1/2011",
    "11/1/2011",
    "12/1/2011",
    "1/1/2012",
    "2/1/2012",
    "3/1/2012",
    "4/1/2012",
    "5/1/2012",
    "6/1/2012",
    "7/1/2012",
    "8/1/2012",
    "9/1/2012",
    "10/1/2012",
    "11/1/2012",
    "12/1/2012",
    "1/1/2013",
    "2/1/2013",
    "3/1/2013",
    "4/1/2013",
    "5/1/2013",
    "6/1/2013",
    "7/1/2013",
    "8/1/2013",
    "9/1/2013",
    "10/1/2013",
    "11/1/2013",
    "12/1/2013",
    "1/1/2014",
    "2/1/2014",
    "3/1/2014",
    "4/1/2014",
    "5/1/2014",
    "6/1/2014",
    "7/1/2014",
    "8/1/2014",
    "9/1/2014",
    "10/1/2014",
    "11/1/2014",
    "12/1/2014",
    "1/1/2015",
    "2/1/2015",
    "3/1/2015",
    "4/1/2015",
    "5/1/2015",
    "6/1/2015",
    "7/1/2015",
    "8/1/2015",
    "9/1/2015",
    "10/1/2015",
    "11/1/2015",
    "12/1/2015",
    "1/1/2016",
    "2/1/2016",
    "3/1/2016",
    "4/1/2016",
    "5/1/2016",
    "6/1/2016",
    "7/1/2016",
    "8/1/2016",
    "9/1/2016",
    "10/1/2016",
    "11/1/2016",
    "12/1/2016",
    "1/1/2017",
    "2/1/2017",
    "3/1/2017",
    "4/1/2017",
    "5/1/2017",
    "6/1/2017",
    "7/1/2017",
    "8/1/2017",
    "9/1/2017",
    "10/1/2017",
    "11/1/2017",
    "12/1/2017",
    "1/1/2018",
    "2/1/2018",
    "3/1/2018",
    "4/1/2018",
    "5/1/2018",
    "6/1/2018",
    "7/1/2018",
    "8/1/2018",
    "9/1/2018",
    "10/1/2018",
    "11/1/2018",
    "12/1/2018",
    "1/1/2019",
    "2/1/2019",
    "3/1/2019",
    "4/1/2019",
    "5/1/2019",
    "6/1/2019",
    "7/1/2019",
    "8/1/2019",
    "9/1/2019",
    "10/1/2019",
    "11/1/2019",
    "12/1/2019",
    "1/1/2020",
    "2/1/2020",
    "3/1/2020",
    "4/1/2020",
    "5/1/2020",
    "6/1/2020",
    "7/1/2020",
    "8/1/2020",
    "9/1/2020",
    "10/1/2020",
    "11/1/2020",
    "12/1/2020",
    "1/1/2021",
    "2/1/2021",
    "3/1/2021",
    "4/1/2021",
    "5/1/2021",
    "6/1/2021",
    "7/1/2021",
    "8/1/2021",
];

const yprice = [

    262.416412,
    282.501129,
    261.868439,
    241.908264,
    221.644226,
    241.51973,
    224.169754,
    261.9133,
    305.704132,
    276.817413,
    295.875977,
    299.059052,
    305.554718,
    292.284454,
    271.034088,
    263.522247,
    252.244522,
    300.717834,
    269.469971,
    256.55835,
    295.21347,
    298.575867,
    321.744019,
    288.971863,
    307.970642,
    319.422729,
    301.295685,
    289.345459,
    288.951935,
    315.303162,
    341.265839,
    375.841248,
    338.879791,
    347.881042,
    352.369232,
    376.434021,
    399.104065,
    395.612152,
    410.745422,
    433.983337,
    438.541229,
    442.217468,
    421.868744,
    436.31958,
    513.365784,
    527.816589,
    558.262512,
    588.279968,
    605.555237,
    555.445007,
    525.218018,
    558.357056,
    573.704895,
    570.034973,
    570.034973,
    575.779175,
    557.549255,
    540.346497,
    524.95874,
    533.056519,
    556.871094,
    546.499573,
    537.340027,
    532.109985,
    520.51001,
    625.609985,
    618.25,
    608.419983,
    710.809998,
    742.599976,
    758.880005,
    742.950012,
    697.77002,
    744.950012,
    693.01001,
    735.719971,
    692.099976,
    768.789978,
    767.049988,
    777.289978,
    784.539978,
    758.039978,
    771.820007,
    796.789978,
    823.210022,
    829.559998,
    905.960022,
    964.859985,
    908.72998,
    930.5,
    939.330017,
    959.109985,
    1016.640015,
    1021.409973,
    1046.400024,
    1169.939941,
    1104.72998,
    1031.790039,
    1017.330017,
    1084.98999,
    1115.650024,
    1217.26001,
    1218.189941,
    1193.469971,
    1076.77002,
    1094.430054,
    1035.609985,
    1116.369995,
    1119.920044,
    1173.310059,
    1188.47998,
    1103.630005,
    1080.910034,
    1216.680054,
    1188.099976,
    1219,
    1260.109985,
    1304.959961,
    1337.02002,
    1434.22998,
    1339.329956,
    1162.810059,
    1348.660034,
    1428.920044,
    1413.609985,
    1482.959961,
    1634.180054,
    1469.599976,
    1621.01001,
    1760.73999,
    1751.880005,
    1835.73999,
    2036.859985,
    2068.629883,
    2410.120117,
    2411.560059,
    2506.320068,
    2704.419922,
    2909.23999
];
const yreturn = [

    0.07653758, -0.073035779, -0.076222148, -0.083767448,
    0.089673006, -0.071836682,
    0.168370377,
    0.167195908, -0.094492406,
    0.068848862,
    0.010758139,
    0.021720346, -0.043430074, -0.0727044, -0.027715484, -0.042796102,
    0.192167947, -0.103910907, -0.047914879,
    0.150667947,
    0.011389714,
    0.077595528, -0.101857856,
    0.065746121,
    0.037185645, -0.056749387, -0.039662785, -0.001360049,
    0.091195883,
    0.082341949,
    0.101315177, -0.098343269,
    0.026561782,
    0.012901508,
    0.06829424,
    0.060223154, -0.00874938,
    0.038252794,
    0.056574982,
    0.010502459,
    0.008382881, -0.046015197,
    0.034254341,
    0.176582046,
    0.028149139,
    0.05768277,
    0.053769428,
    0.029365727, -0.082750882, -0.054419409,
    0.063095775,
    0.027487499, -0.006396881,
    0,
    0.010076929, -0.031661305, -0.030854239, -0.028477573,
    0.015425553,
    0.044675516, -0.018624635, -0.01676039, -0.009733208, -0.021799957,
    0.201917298, -0.011764494, -0.015899744,
    0.168288383,
    0.044723594,
    0.021923013, -0.020991452, -0.060811618,
    0.06761539, -0.069722802,
    0.061629645, -0.059288855,
    0.110807693, -0.002263284,
    0.013349834,
    0.009327278, -0.033777756,
    0.018178499,
    0.032352065,
    0.033158103,
    0.007713677,
    0.092097044,
    0.065013865, -0.058174249,
    0.023956533,
    0.00948954,
    0.021057528,
    0.059982725,
    0.004691885,
    0.02446623,
    0.118061845, -0.055737871, -0.06602513, -0.0140145,
    0.066507399,
    0.028258357,
    0.091076936,
    0.000763954, -0.020292377, -0.097782059,
    0.016400934, -0.053744932,
    0.077983035,
    0.003179993,
    0.04767306,
    0.012929166, -0.071393693, -0.020586583,
    0.125607142, -0.023490217,
    0.026007933,
    0.033724352,
    0.035592112,
    0.024567849,
    0.072706436, -0.066167927, -0.131797169,
    0.159828317,
    0.059510928, -0.010714427,
    0.049058776,
    0.101971798, -0.100711104,
    0.10302806,
    0.086199332, -0.005031967,
    0.047868567,
    0.109557996,
    0.015597487,
    0.165080393,
    0.000597457,
    0.03929407,
    0.079040126,
    0.075735305,




];
// price chart ko lagi 
//setup
const data = {

        labels: xlabels,
        datasets: [{
            label: 'Price Index ',
            data: yprice,
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(0, 0, 255, 1.0)',
            borderWidth: 2,
            showXlabels: 10,
            pointRadius: 0,



        }]
    }
    //config
const config = {
    type: 'line',
    data: data,
    options: {
        title: {
            text: "Price chart",
            display: true
        },
        layout: {
            padding: 100,
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    labelString: 'Price',
                    display: true,
                    fontColor: 'blue',
                    fontSize: 20,
                },

            }]



        }
    }
};
// render pricechart block 
const priceChart = new Chart(
    document.getElementById('priceChart'),
    config,
);

// return chart ko lagi 

//setup
const data2 = {

    labels: xlabels,
    datasets: [{
        label: ' Return',
        data: yreturn,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(0, 0, 255, 1.0)',
        borderWidth: 2,
        showXlabels: 10,
        pointRadius: 0,



    }]
}

// another chart config
const config2 = {
    type: 'line',
    data: data2,
    options: {
        title: {
            text: "Return chart",
            display: true
        },
        layout: {
            padding: 100,
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    labelString: 'Return',
                    display: true,
                    fontColor: 'blue',
                    fontSize: 20,
                },

            }]



        }
    }
};


//render return chart block 
const returnChart = new Chart(
    document.getElementById('returnChart'),
    config2,
);