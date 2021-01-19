var typed = new Typed('.autoType', {
    strings: ['am a Programmer',
        'am a Web designer',
        'am a Robotics enthusisiast and tech savvy geek',
        'can design clean user interfaces',
        'have an obssesion for data visulization and machine learning',
        'am a Graphics Designer',
        'love to explore different parts of arts and music',
        'have developed AI robotics and home automation solutions for my own',
        'have developed android apps',
        'am experienced in coding in Processing',
        'have conducted a research on COVID-19 with machine learning',
        'love to innovate things that matters',
        'think that to be able to do the best you have to able to handle the worst'
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
    cursorChar: ' ',
});

$('svg.radial-progress').each(function (index, value) {
    $(this).find($('circle.complete')).removeAttr('style');
});

$(window).scroll(function () {
    $('svg.radial-progress').each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window)
                .height() * 0.25)
        ) {
            // Get percentage of progress
            percent = $(value).data('percentage');
            // Get radius of the svg's circle.complete
            radius = $(this).find($('circle.complete')).attr('r');
            // Get circumference (2πr)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Transition progress for 1.25 seconds
            $(this).find($('circle.complete')).animate({
                'stroke-dashoffset': strokeDashOffset
            }, 1250);
        }
    });
}).trigger('scroll');


function openProjects(evt, projectName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("prj");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-light-grey", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " w3-light-grey";
  }
