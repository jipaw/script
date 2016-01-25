var casper = require('casper').create({
    verbose : true,
    logLevel: "info",
    onRunComplete: function() {
        // keep open  
    }
});

casper.start('http://192.168.0.22/mesin_dep.php', function() {
       //  this.echo(this.getTitle());
       console.log("casperjs start");
       this.capture('screen2.png');
       });

casper.run();  //running mesin monitor


/* Code diatas menampilkan data monitoring untuk url yang masuk ke server
 * Data yang masuk akan diparsing server untuk diolah lebih lanjut
 */
