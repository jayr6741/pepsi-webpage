$(document).ready(function () { 
    $('.img3').click(function () {
        $('.main').css({
            background:'rgb(0, 75, 147)',
            color:'#fff'
        })
         $('.change').attr('src','images/blue_pepsi.png')
        $('h1').css({
            background:'rgb(0, 75, 147)',
            color:'#fff'
        })
        $('span').css({
            background:'rgb(0, 75, 147)',
            color:'red'
        })
        $('.btn').css({
            background:'white',
            color:'red'
        })
    })
    $('.img2').click(function () {
        $('.main').css({
            background:'rgb(195, 199, 199)',
            color:'#333'
        })
        $('.change').attr('src','images/silver_pepsi.png')
        $('h1').css({
            background:'rgb(195, 199, 199)',
            color:'#333'
        })
        $('span').css({
            background:'rgb(195, 199, 199)',
            color:'white'
        })
        $('.btn').css({
            background:'white',
            color:'red'
        })
    })
    $('.img1').click(function () {
        $('.main').css({
            background:'black',
            color:'#fff'
        })
         $('.change').attr('src','images/black_pepsi.png')
        $('h1').css({
            background:'black',
            color:'#fff'
        })
        $('span').css({
            background:'black',
            color:'red'
        })
        $('.btn').css({
            background:'white',
            color:'red'
        })
    })
})