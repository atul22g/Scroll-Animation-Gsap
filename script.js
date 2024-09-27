document.querySelectorAll('.card').forEach(card => {
    gsap.to(
        card,{
            scale: 0.7,
            opacity: 0,
            scrollTrigger: {
                trigger: card,
                start: "top 8%",
                end: "bottom 8%",
                scrub: true,
                // markers: true
            }
        }
    )
})