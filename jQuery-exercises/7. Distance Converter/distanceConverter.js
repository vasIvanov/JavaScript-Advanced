function attachEventsListeners() {
    $('#convert').on('click', convert);
    let converterObj = {
        'kmkm': 1,
        'kmm': 1000,
        'kmcm': 100000,
        'kmmm' : 1000000,
        'kmmi': 0.621371192,
        'kmyrd': 1093.6133,
        'kmft' : 3280.8399,
        'kmin' : 39370.0787,

        'mkm': 0.001,
        'm.m': 1,
        'mcm' : 100,
        'm.mm' : 1000,
        'mmi': 0.000621371192,
        'myrd': 1.0936133,
        'mft': 3.2808399,
        'min': 39.3700787,

        'cmkm': 0.00001,
        'cmm' : 0.01,
        'cmcm': 1,
        'cmmm': 10,
        'cmmi': 0.0000062137,
        'cmyrd': 0.010936133,
        'cmft': 0.032808399,
        'cmin': 0.393700787,

        'mmkm': 0.000001,
        'mm.m' : 0.001,
        'mmcm': 0.1,
        'mm.mm': 1,
        'mmmi': 0.000000621,
        'mmyrd': 0.0010936133,
        'mmft': 0.0032808399,
        'mmin': 0.0393700787,

        'mikm': 1.609344,
        'mim': 1609.344,
        'micm': 160934.4,
        'mimm': 1609344,
        'mimi': 1,
        'miyrd': 1760,
        'mift': 5280,
        'miin': 63360,

        'yrdkm': 0.0009144,
        'yrdm': 0.9144,
        'yrdcm': 91.44,
        'yrdmm': 914.4,
        'yrdmi': 0.000568181818,
        'yrdyrd': 1,
        'yrdft': 3,
        'yrdin': 36,

        'ftkm': 0.0003048,
        'ftm': 0.3048,
        'ftcm': 30.48,
        'ftmm': 304.8,
        'ftmi': 0.000189393939,
        'ftyrd': 0.333333333,
        'ftft': 1,
        'ftin': 12,

        'inkm': 0.0000254,
        'inm': 0.0254,
        'incm': 2.54,
        'inmm': 25.4,
        'inmi': 0.0000157828283,
        'inyrd': 0.0277777778,
        'inft': 0.0833333333,
        'inin': 1
    };

    function convert() {
        let inputUnits = $('#inputUnits').val();
        let outputUnits = $('#outputUnits').val();
        let inputDistance = +$('#inputDistance').val();
        if((inputUnits === 'mm' || inputUnits === 'm') && (outputUnits === 'mm' || outputUnits === 'm')) {
            inputUnits += '.';
        }
        $('#outputDistance').val(inputDistance * converterObj[inputUnits + outputUnits]);
    }
}
  