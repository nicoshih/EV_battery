var config = {
    style: 'mapbox://styles/yshih5/clgmebcep000t01qneomfc23i',
    accessToken: 'pk.eyJ1IjoieXNoaWg1IiwiYSI6ImNsN2dvcGN5djA2bDIzb21uZzM2enBmdHgifQ.Cm4U8hp1bb-1-AQWB5kFSQ',
    showMarkers: true,
    markerColor: '#0555b6',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: CoStar, April 2023 <br> Map: Nicole',
    chapters: [

        {
            id: 'fourth-chapter', // US view 
            alignment: 'left',
            hidden: false,
            title: 'EV Battery Production Process',
            subtitle: 'subhead',
            image: '',
            description: 'By Andy Peters, Nicole Shih',
            location: {
                center: [-95.7129, 37.0902],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },

        {
            id: 'slug-style-id', // First Lithium Mines 
            alignment: 'left',
            hidden: false,
            title: 'Lithium Mines ',
            image: 'https://www.reuters.com/resizer/4hFpUxY7qOyCab5pJjAmBjE7zhM=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CFFDFEIAMZIQ7FXDSWF2SRJQSY.jpg',
            description: 'Silver Peak, Nevada – the only operating lithium mine in the U.S.',
            location: {
                center: [-117.56542819103761, 37.774511037970825],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'locations',
                     opacity: 1,
                   duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'locations',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Lithium Mines',
            image: 'https://www.sec.gov/Archives/edgar/data/1440972/000119312523088471/g440457img225845015_4.jpg',
            description: 'Construction on the mine began on March 2, 2023. It will be the largest U.S. lithium mine when open. <br>Kings Mountain spodumene mine. Spodumene is lithium ore. The mine’s owner, Albemarle Corp., is working to restart operations at the mine. Location is 348 Holiday Inn Dr., Kings Mountain, North Carolina ',
            location: {
                center: [-117.94984515152917 , 41.72262380832427],
                zoom: 7,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },

        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Lithium Mining part 2 ',
            description: 'Lithium mined at Silver Peak is pumped into solar evaporation ponds:After the liquid evaporates, the lithium is processed into powder or pellets.   ',
            location: {
                center: [-117.94984515152917 , 41.72262380832427],
                zoom: 8.5,
                pitch: 0,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },

        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Lithium Shipping ',
            image: '/Users/yshih/Desktop/storytelling-main/src/images/shipping.jpg',
            description: 'The lithium powder or pellets are shipped by truck from the Silver Peak mine to a Union Pacific railhead in Hawthorne, Nevada. Bags of lithium powder or pellets can be shipping by train to any lithium processing facility in the U.S. and Canada. ',
            location: {
                center: [-118.62318764989622 
                    , 38.55653229918917],
                zoom: 12.52,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Lithium Processing ',
            image: 'https://www.gannett-cdn.com/presto/2022/03/22/NSHS/5f01b03c-cb70-4d5e-9725-d0b02ddca040-Albemarle_1.4.1.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp',
            description: 'Albemarle Corp. operates a lithium processing facility at the same location as its mine at 348 Holiday Inn Dr., Kings Mountain, North Carolina.  ',
            location: {
                center: [-81.35076861157006, 35.217042986255436],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },

        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cathode and Anode  ', // three points on this chapter
            description: 'Processed lithium is combined with nickel, cobalt and manganese to make cathode, or combined with graphite to make to anode. <br> Cathode factories under construction: Redwood Materials, Comstock Commerce Center, Sparks, Nevada.',
            location: {
                center: [-119.389385 , 39.4659242],
                zoom: 8.5,
                pitch: 0,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },

        {
            id: 'sixth-identifier', // first Cathode factory
            alignment: 'right',
            hidden: false,
            title: 'Cathode factories under construction  ', // three points on this chapter
            description: 'Redwood Materials, Comstock Commerce Center, Sparks, Nevada.',
            location: {
                center: [-119.389385 , 39.4659242],
                zoom: 8.5,
                pitch: 0,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },


        {
            id: 'seventh-identifier', // second Cathode factory
            alignment: 'right',
            hidden: false,
            title: 'Cathode factories under construction  ', // three points on this chapter
            description: 'Ascend Elements, 6505 John Rivers Rd, Pembroke, KY 42266 ',
            location: {
                center: [-87.38559833134214, 36.78833985559827 ],
                zoom: 8.5,
                pitch: 0,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },
        {
            id: 'eighth-identifier', // third Cathode factory
            alignment: 'right',
            hidden: false,
            title: 'Cathode factories under construction  ', // three points on this chapter
            description: 'LG Chem, 1301 Charles Bell Rd, Clarksville, TN 37040',
            location: {
                center: [ -87.253037, 36.591710 ],
                zoom: 8.5,
                pitch: 0,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'locations',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'locations',
                    opacity: 0
                }
           ]
        },
        {
            id: 'ninth-identifier', // Battery Cell Factory - 1
            alignment: 'right',
            hidden: false,
            title: 'Battery Cell Factory  ', // all points which factories that make only battery cells
            description: 'Factories that make only battery cells',
            location: {
                center: [ -87.253037, 36.591710 ],
                zoom: 5,
                pitch: 0,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
                {
                   layer: 'battery-cell',
                    opacity: 1,
                  duration: 5000
                }
           ],
           onChapterExit: [
                {
                    layer: 'battery-cell',
                    opacity: 1
                }
           ]
        },
        
    ]
};
