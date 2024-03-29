// on click listener to hide/show div
$(document).ready(function() {
    $('.button').on('click', function() {
        // use > to indicate direct child [of parent()]
        var div = $(this).parent().find('> div');
        console.log(div)
        if (div.hasClass('collapsed')) {
            div.removeClass('collapsed')
            div.addClass('shown')
        }
        else {
            div.removeClass('shown');
            div.addClass('collapsed');
        }
    });
});

// instead of using static file serve, just paste the files in here
var geojson = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"coordinates":[[[-79.40011464833961,43.65795077691766],[-79.38295061643845,43.66126546302979],[-79.38675852164619,43.67042097607302],[-79.40376147187064,43.66688157293916],[-79.40011464833961,43.65795077691766]]],"type":"Polygon"}}]};
var polygon_dbf = '|    !                       \
';
var polygon_prj = 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137,298.257223563]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]]';
var polygon_shp = "  ' \
                       v�     nD[:��S���&�7�E@�eMC��S��d�Z��E@                                      @   nD[:��S���&�7�E@�eMC��S��d�Z��E@          :Qxz��S���&�7�E@�eMC��S����X��E@�zЦ��S��d�Z��E@nD[:��S� \
`\�E@:Qxz��S���&�7�E@";
var polygon_shx = "  ' \
                       6�     nD[:��S���&�7�E@�eMC��S��d�Z��E@                                   2   @";

// load in text values of files
$(document).ready(function() {
    $('#f-geojson').text(JSON.stringify(geojson, null, 4));
    $('#f-polygon-dbf').text(polygon_dbf);
    $('#f-polygon-prj').text(polygon_prj);
    $('#f-polygon-shp').text(polygon_shp);
    $('#f-polygon-shx').text(polygon_shx);
});
