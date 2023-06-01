
setInterval(function (){

    let date = new Date();

    document.querySelector('#output1').style.width = (10 * date.getSeconds(60)) / 60 + '%';
    document.querySelector('#output2').style.width = (10 * date.getSeconds(60)) / 60 + '%';
    document.querySelector('#output3').style.width = (10 * date.getSeconds(60)) / 60 + '%';
    // document.querySelector('#output4').style.width = (10 * date.getSeconds()) / 60 + '%';
    document.querySelector('#output5').style.width = (2 * date.getSeconds(60)) / 30 + '%';

    
},1000)

$('#action1').on('click', function(){
    $('#output1').fadeToggle(5000,0);

})

$('#action2').on('click', function(){
    $('#output2').fadeToggle(5000,0);

})
$('#action3').on('click', function(){
    $('#output3').fadeToggle(5000,0);

})
$('#action4').on('click', function(){
    $('#output4').fadeToggle(5000,0);

})
$('#action5').on('click', function(){
    $('#output5').fadeToggle(5000,0);

})

$('#action6').on('click', function(){
    $('#output1').stop();
    $('#output2').stop();
    $('#output3').stop();
    $('#output4').stop();
    $('#output5').stop();

})

// $('#action1').on('click', function(){
//     $('#output1','#output2','#output3','#output4','#output5').slideUp(2000);
    // $('#output2').slideDown(2000);
    // $('#output3').slideDown(2000);
    // $('#output4').slideDown(2000);
    // $('#output5').slideDown(2000);


// })
// $('#action1').on('click', function(){
//     $('#output1').hide(2000),show(2000),slideUp(2000),slideDown(2000),fadeOut(2000),fadeIn(2000);
//     $('#output2').hide(2000),show(2000),slideUp(2000),slideDown(2000),fadeOut(2000),fadeIn(2000);

// })
