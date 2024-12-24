var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TEMPATSAMPAHAKHIR_PT_50K_1 = new ol.format.GeoJSON();
var features_TEMPATSAMPAHAKHIR_PT_50K_1 = format_TEMPATSAMPAHAKHIR_PT_50K_1.readFeatures(json_TEMPATSAMPAHAKHIR_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPATSAMPAHAKHIR_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATSAMPAHAKHIR_PT_50K_1.addFeatures(features_TEMPATSAMPAHAKHIR_PT_50K_1);
var lyr_TEMPATSAMPAHAKHIR_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPATSAMPAHAKHIR_PT_50K_1, 
                style: style_TEMPATSAMPAHAKHIR_PT_50K_1,
                popuplayertitle: 'TEMPATSAMPAHAKHIR_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TEMPATSAMPAHAKHIR_PT_50K_1.png" /> TEMPATSAMPAHAKHIR_PT_50K'
            });
var format_KABELLISTRIK_LN_50K_2 = new ol.format.GeoJSON();
var features_KABELLISTRIK_LN_50K_2 = format_KABELLISTRIK_LN_50K_2.readFeatures(json_KABELLISTRIK_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KABELLISTRIK_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KABELLISTRIK_LN_50K_2.addFeatures(features_KABELLISTRIK_LN_50K_2);
var lyr_KABELLISTRIK_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KABELLISTRIK_LN_50K_2, 
                style: style_KABELLISTRIK_LN_50K_2,
                popuplayertitle: 'KABELLISTRIK_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/KABELLISTRIK_LN_50K_2.png" /> KABELLISTRIK_LN_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TEMPATSAMPAHAKHIR_PT_50K_1.setVisible(true);lyr_KABELLISTRIK_LN_50K_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TEMPATSAMPAHAKHIR_PT_50K_1,lyr_KABELLISTRIK_LN_50K_2];
lyr_TEMPATSAMPAHAKHIR_PT_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KABELLISTRIK_LN_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'DAYA': 'DAYA', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TEMPATSAMPAHAKHIR_PT_50K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KABELLISTRIK_LN_50K_2.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'FCODE': '', 'DAYA': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_TEMPATSAMPAHAKHIR_PT_50K_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_KABELLISTRIK_LN_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'DAYA': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KABELLISTRIK_LN_50K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});