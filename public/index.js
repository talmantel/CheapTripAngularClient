function toggleDropdown(index) {
    const dropdown = document.getElementById('dropdown-' + index);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    const dropdowns = document.getElementsByClassName('dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
        const currentDropdown = dropdowns[i];
        if (currentDropdown.id !== 'dropdown-' + index) {
            currentDropdown.style.display = 'none';
        }
    }
}

window.yaContextCb.push(() => {
    Ya.Context.AdvManager.render({
        "blockId": "R-A-2154612-1",
        "type": "floorAd"
    })
});

$(document).ready(function () {
    $('.city-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000
    });
});