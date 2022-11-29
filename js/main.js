$(document).ready(function(){
    
    var theme = $("#theme");
    var cargado = localStorage.getItem("color");

    if(cargado == null){
        cargado = "css/green.css";
    }

    theme.attr('href', cargado)

    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            auto: true,
            pause: 3000,
            randomStart: true,
            slideWidth: 1200,
            responsisve: true,
            autoHover: true
        });
    }
    
    //Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de título 1',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet accumsan ante, a commodo nibh pulvinar et. cenas vitae turpis quis libero volutpat mollis. Aliquam erat volutpat. Pellentesque in eros vitae lorem dignissim fringilla. Etiam ante nulla, dapibus a ligula eu, tempus feugiat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget volutpat risus. Phasellus porta viverra augue. Proin eu posuere dolor, elementum pellentesque urna. Aenean ultrices laoreet magna eu condimentum. Proin id sapien porta, posuere risus vel, vulputate justo. Fusce non sodales nulla. Nam ligula metus, tempus non sodales et, sodales id eros. Vivamus dapibus nibh massa, vitae sodales lectus aliquet sed.'
            },
            {
                title: 'Prueba de título 2',
                date: moment().format("MMMM dddd YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet accumsan ante, a commodo nibh pulvinar et. cenas vitae turpis quis libero volutpat mollis. Aliquam erat volutpat. Pellentesque in eros vitae lorem dignissim fringilla. Etiam ante nulla, dapibus a ligula eu, tempus feugiat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget volutpat risus. Phasellus porta viverra augue. Proin eu posuere dolor, elementum pellentesque urna. Aenean ultrices laoreet magna eu condimentum. Proin id sapien porta, posuere risus vel, vulputate justo. Fusce non sodales nulla. Nam ligula metus, tempus non sodales et, sodales id eros. Vivamus dapibus nibh massa, vitae sodales lectus aliquet sed.'            
            },
            {
                title: 'Prueba de título 3',
                date: 'Publicado el día: ' + moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet accumsan ante, a commodo nibh pulvinar et. cenas vitae turpis quis libero volutpat mollis. Aliquam erat volutpat. Pellentesque in eros vitae lorem dignissim fringilla. Etiam ante nulla, dapibus a ligula eu, tempus feugiat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget volutpat risus. Phasellus porta viverra augue. Proin eu posuere dolor, elementum pellentesque urna. Aenean ultrices laoreet magna eu condimentum. Proin id sapien porta, posuere risus vel, vulputate justo. Fusce non sodales nulla. Nam ligula metus, tempus non sodales et, sodales id eros. Vivamus dapibus nibh massa, vitae sodales lectus aliquet sed.'  
            },
            {
                title: 'Prueba de título 4',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet accumsan ante, a commodo nibh pulvinar et. cenas vitae turpis quis libero volutpat mollis. Aliquam erat volutpat. Pellentesque in eros vitae lorem dignissim fringilla. Etiam ante nulla, dapibus a ligula eu, tempus feugiat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget volutpat risus. Phasellus porta viverra augue. Proin eu posuere dolor, elementum pellentesque urna. Aenean ultrices laoreet magna eu condimentum. Proin id sapien porta, posuere risus vel, vulputate justo. Fusce non sodales nulla. Nam ligula metus, tempus non sodales et, sodales id eros. Vivamus dapibus nibh massa, vitae sodales lectus aliquet sed.'    
            },
            {
                title: 'Prueba de título 5',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet accumsan ante, a commodo nibh pulvinar et. cenas vitae turpis quis libero volutpat mollis. Aliquam erat volutpat. Pellentesque in eros vitae lorem dignissim fringilla. Etiam ante nulla, dapibus a ligula eu, tempus feugiat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget volutpat risus. Phasellus porta viverra augue. Proin eu posuere dolor, elementum pellentesque urna. Aenean ultrices laoreet magna eu condimentum. Proin id sapien porta, posuere risus vel, vulputate justo. Fusce non sodales nulla. Nam ligula metus, tempus non sodales et, sodales id eros. Vivamus dapibus nibh massa, vitae sodales lectus aliquet sed.'    
            },
            {
                title: 'Prueba de título 6',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet accumsan ante, a commodo nibh pulvinar et. cenas vitae turpis quis libero volutpat mollis. Aliquam erat volutpat. Pellentesque in eros vitae lorem dignissim fringilla. Etiam ante nulla, dapibus a ligula eu, tempus feugiat augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget volutpat risus. Phasellus porta viverra augue. Proin eu posuere dolor, elementum pellentesque urna. Aenean ultrices laoreet magna eu condimentum. Proin id sapien porta, posuere risus vel, vulputate justo. Fusce non sodales nulla. Nam ligula metus, tempus non sodales et, sodales id eros. Vivamus dapibus nibh massa, vitae sodales lectus aliquet sed.'
            }
        ]

        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button_viewMore">Read more</a>
                </article>
            `
            $('#posts').append(post)
        })

        //Fake Login
        $('#login form').submit(function(){
            var f_name = $('#f_name').val()
            localStorage.setItem('form_name', f_name);
            var f_email = $('#f_email').val()
            localStorage.setItem('form_email', f_email);
            var f_pass = $('#f_pass').val()
            localStorage.setItem('form_pass', f_pass)
        })

        var f_name = localStorage.getItem('form_name')
        var f_email = localStorage.getItem('form_email')

        if(f_name != null && f_name != 'undefined'){
            var about_parr = $('about') 
            about_parr.html('<br><strong>Bienvenido, ' + f_name + '</strong>')
            about_parr.append('<a href="#" id="logout">Cerrar</a>')
            $('#login').hide()

            $('#logout').click(function(){
                localStorage.clear()
                location.reload()
            })
        }
    }
        
        
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            var reloj = moment().format('hh:mm:ss')
            $('#watch').html(reloj)
        }, 1000)
        
    }

    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion()
        $('#login').hide()
    }
    
    if(window.location.href.indexOf('contact') > -1){
        
        $('form input[name="fecha"]').datepicker({
            dateFormat: 'dd/mm/yy',
            showAnim: 'clip'
        })

        $("#contactF").validate({
            rules: {
                name:"required",
                apellido:"required",
                email: {
                  required: true,
                  email: true
                },
                fecha: {
                  required: true
                },
                edad: {
                  required:true
                },
                sexo: "required"
                },
            messages: {
                name:"Please enter your firstname",
                apellido:"Please enter your lastname",
                email:"Your email address must be in the format of name@domain.com",
                fecha:"Please select your birth date",
                edad: "Please enter a valid number age",
                sexo:"Please select your gender"
                }
            });      

            $('#about').hide()
    }

       //Selector de tema
       $('#to_green').click(function(){
        let green = "css/green.css"
        theme.attr("href", green); 
        localStorage.setItem('color', green)
    }) 
    $('#to_red').click(function(){
        let red = "css/red.css"
        theme.attr("href", red)
        localStorage.setItem('color', red)

    }) 
    $('#to_blue').click(function(){
        let blue = "css/blue.css"
        theme.attr('href', blue);
        localStorage.setItem('color', blue)  
    })
    
    //Scroll hacia arriba de la página
    $('.up').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 500)
        return false
    })
})