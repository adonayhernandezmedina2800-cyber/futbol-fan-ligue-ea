document.addEventListener('DOMContentLoaded', () => {


    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });


    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.getElementById("close-modal");

    document.querySelectorAll(".gallery-container img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });


    const form = document.getElementById('contact-form');
    const response = document.getElementById('form-response');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        response.style.display = 'block';
        form.reset();
    });


    const leagueLink = document.getElementById('league-link');
    const leagueTable = document.getElementById('league-table');


    const teamsLink = document.getElementById('teams-link');
    const teamsSection = document.getElementById('teams-section');

    leagueLink.addEventListener('click', function () {
        leagueTable.style.display = 'block';
        teamsSection.style.display = 'none';
        leagueTable.scrollIntoView({ behavior: "smooth" });
    });

    teamsLink.addEventListener('click', function () {
        teamsSection.style.display = 'block';
        leagueTable.style.display = 'none';
        teamsSection.scrollIntoView({ behavior: "smooth" });
    });


    const teamRows = document.querySelectorAll('.team-row');
    const showMoreBtn = document.getElementById('show-more-btn');
    let visibleCount = 3;

    teamRows.forEach((row, index) => {
        if (index >= visibleCount) row.style.display = 'none';
    });

    showMoreBtn.addEventListener('click', () => {
        const nextCount = visibleCount + 3;
        teamRows.forEach((row, index) => {
            if (index < nextCount) row.style.display = '';
        });
        visibleCount = nextCount;
        if (visibleCount >= teamRows.length) {
            showMoreBtn.style.display = 'none';
        }
    });
});