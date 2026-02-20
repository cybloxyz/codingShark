const projectItems = [
    {
        name: "Pixel Art Styles Personal Website",
        man: "像素艺术个人网站",
        desc: "Personal website with pixel art styles",
        price: "24 hours",
        images: ["assets/nfnaa.png"],
        github: "nfnaa",
        link: "nfnaa.dev",
    },
    {
        name: "Itsboo",
        man: "钢琴相机",
        desc: "play piano with realtime finger tracking",
        price: "26 hours",
        images: ["assets/itsb.png"],
        github: "itsboo",
        link: "",
    },
    {
        name: "Glowducky",
        man: "夜光小鸭",
        desc: "bedlamp with sailor duck case",
        price: "8 hours",
        images: ["assets/gloww.png"],
        github: "glowducky",
        link: "",
    },
    {
        name: "Inarah Back2school - nostalgic",
        man: "怀念高中",
        desc: "nostalgic deja vu game for my school's big event of alumni",
        price: "6 hours",
        images: ["assets/in.png", "assets/inn.png", "assets/innn.png"],
        github: "inarahgame",
        link: "",
    },
    {
        name: "Liveterminal Personal Website",
        man: "终端风格个人网站",
        desc: "personal website with terminal style",
        price: "8.5 hours",
        images: ["assets/term.png", "assets/termm.png"],
        github: "",
        link: "terminal.nfnaa.dev",
    },
    {
        name: "Bentobox Website",
        man: "Bentobox 网站",
        desc: "website that selling food and digital catalogue this website is still in building!",
        price: "15 hours",
        images: ["assets/bento.png", "assets/bbx.png"],
        github: "",
        link: "bentobox.nfnaa.dev",
    },
];

const comingSoon = [
    {
        name: "D-Bank",
        man: "爸爸银行",
        desc: "bank that'll give you everything",
        price: "still building",
        images: ["assets/cs.jpeg", "assets/cs.jpeg"]
    }, 
]
        
        let currentItem = null;
        
        // Render menu
        function renderMenu() {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = projectItems.map((item, i) => `
                <div class="menu-card" onclick="openModal(${i})">
                    <div class="card-image">
                        ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
                        <img src="${Array.isArray(item.images) ? item.images[0] : item.images}" alt="${item.name}">
                        <div class="card-tap-hint">Tap to view more 📸</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-name">${item.name}</h3>
                        <p class="card-man">${item.man}</p>
                        <p class="card-desc">${item.desc}</p>
                        <div class="card-footer">
                            <span class="card-price">${item.price}</span>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Coming soon
            const soonGrid = document.getElementById('coming-soon-grid');
            soonGrid.innerHTML = comingSoon.map(item => `
                <div class="menu-card unavailable">
                    <div class="card-image">
                        <img src="${item.images[0]}" alt="${item.name}">
                    </div>
                    <div class="card-content">

                        <h3 class="card-name">${item.name}</h3>
                        <p class="card-man">${item.man}</p>
                        <p class="card-desc">${item.desc}</p>
                        <div class="card-footer">
                            <span class="card-price">
                            ${item.price}</span>
                        </div>
                    </div>
                    <div class="unavailable-overlay">
                        <span class="unavailable-badge">Coming Soon </span>
                    </div>
                </div>
            `).join('');
        }

        function openGit() {
            window.open('https://github.com/cybloxyz', '_blank');
            closeModal();
            confetti();
            toast('Opening github...');
        }

        function openLink() {
            window.open('https://nfnaa.dev', '_blank');
            closeModal()
            confetti()
            toast('Opening link...');
        }
        
        // Bubbles - appear immediately!
        function createBubbles() {
            const container = document.getElementById('bubbles');
            
            // Create bubbles at different starting positions
            for (let i = 0; i < 20; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                const size = Math.random() * 50 + 15;
                bubble.style.width = size + 'px';
                bubble.style.height = size + 'px';
                bubble.style.left = Math.random() * 100 + '%';
                
                // First 8 bubbles start already on screen at random heights
                if (i < 8) {
                    bubble.style.bottom = (Math.random() * 80 + 10) + 'vh';
                    bubble.style.animationDelay = '0s';
                } else {
                    bubble.style.bottom = '-80px';
                    bubble.style.animationDelay = (Math.random() * 3) + 's'; // Max 3s delay
                }
                
                bubble.style.animationDuration = (Math.random() * 10 + 8) + 's';
                container.appendChild(bubble);
            }
        }
        
        
        // Modal
        function openModal(index) {
            currentItem = projectItems[index];
            const displayImg = Array.isArray(currentItem.images) ? currentItem.images[0] : currentItem.images;
            document.getElementById('modal-img').src = displayImg;
            document.getElementById('modal-name').textContent = currentItem.name;
            document.getElementById('modal-man').textContent = currentItem.man;
            document.getElementById('modal-desc').textContent = currentItem.desc;
            document.getElementById('modal-price').innerHTML = `${currentItem.price}`;
            
            // Wrap this logic to check if it's an array first:
            const imagesArray = Array.isArray(currentItem.images) ? currentItem.images : [currentItem.images];

            document.getElementById('modal-thumbs').innerHTML = imagesArray.map((img, i) => 
            `<img src="${img}" class="modal-thumb ${i === 0 ? 'active' : ''}" onclick="setImage('${img}', this)">`
            ).join('');

            const links = document.getElementById('openLinks');
            let buttonHtml = '';

            if (currentItem.github) {
                buttonHtml += `
                    <a href="https://github.com/cybloxyz/${currentItem.github}" class="order-btn github" target="_blank" style="text-decoration:none; margin-left:10px;">
                        Github Repo
                    </a>`;

            if (currentItem.link) {
                buttonHtml += `
                    <a href="https://${currentItem.link}" class="order-btn link" target="_blank" style="text-decoration:none; margin-left:10px;">
                        Link
                    </a>`;
            }

            links.innerHTML = buttonHtml;
            }
            
            document.getElementById('modal').classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        
        function setImage(src, el) {
            document.getElementById('modal-img').src = src;
            document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
        }
        
        function closeModal(e) {
            if (!e || e.target === document.getElementById('modal')) {
                document.getElementById('modal').classList.remove('open');
                document.body.style.overflow = '';
            }
        }
        
        function openIns() {
            window.open('https://instagram.com/nfnailalhusna', '_blank');
            closeModal();
            confetti();
            toast('Opening instagram...');
        }
        
        function toast(msg) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2500);
        }
        
        function confetti() {
            const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#FFD700', '#FFF'];
            for (let i = 0; i < 25; i++) {
                const piece = document.createElement('div');
                piece.className = 'confetti';
                piece.style.left = Math.random() * 100 + 'vw';
                piece.style.top = '-10px';
                piece.style.width = (Math.random() * 8 + 4) + 'px';
                piece.style.height = (Math.random() * 8 + 4) + 'px';
                piece.style.background = colors[Math.floor(Math.random() * colors.length)];
                piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(piece);
                setTimeout(() => piece.remove(), 4000);
            }
        }
        
        // Location feature - bluey's coordinates (Sukhumvit 36)
        const blueYS_LAT = -0.9500;
        const blueYS_LNG = 100.3500;
        
        function checkLocation() {
            const statusEl = document.getElementById('distance-text');
            const badge = document.getElementById('location-status');
            
            statusEl.textContent = '🔍 Finding you...';
            
            if (!navigator.geolocation) {
                statusEl.textContent = 'owh something wrong';
                return;
            }
            
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const dist = getDistance(
                        pos.coords.latitude, 
                        pos.coords.longitude, 
                        blueYS_LAT, 
                        blueYS_LNG
                    );
                    
                    let message;
                    badge.classList.add('distance-found');
                    
                    if (dist < 10) {
                        message = "🔥 YOU'RE HERE!";
                    } else if (dist < 200) {
                        message = "LET'S CODE";
                    } else if (dist < 400) {
                        message = "yayy hello";
                    } else {
                        message = "LET'S CODING";
                    }
                    
                    statusEl.textContent = `${message} (${dist.toFixed(1)}km)`;
                    confetti();
                },
                (err) => {
                    statusEl.textContent = '📍 Tap to allow location';
                },
                { enableHighAccuracy: true }
            );
        }
        
        // Haversine distance formula
        function getDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Earth's radius in km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }

        function checkHours() {
            const badge = document.getElementById('');
            const now = new Date();
            const hour = now.getHours();
            
            if (hour >= 9 && hour < 21) {
                badge.textContent = 'coding..';
                badge.classList.add('open');
                badge.classList.remove('closed');
            } else {
                badge.textContent = 'sleep..';
                badge.classList.add('closed');
                badge.classList.remove('open');
            }
        }
        
        async function realHours() {
            const badge = document.getElementById('rating-badge')

            const url = "https://timeapi.io/api/v1/timezone/zone?timeZone=Asia%2FJakarta";

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('waktu tidak diketahui');
                const result = await response.json();

                if (result && result.time) {
                    badge.innerText= `${result.time} WIB`
                }
            } catch (error) {
        console.error("Error:", error);
        badge.textContent = "is coding hard!";
            }
        }
        // Peeking shark click
        document.getElementById('shark-rawr').addEventListener('click', () => {
            confetti();
            toast('Rawwrr!');
        });
        
        // Hide loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden');
            }, 800);
        });

        //API KEY

async function codeStats() {
    const badge = document.getElementById('hours-badge');
    
    // API Key kamu dari gambar Swagger
    const API_KEY = 'ad9b2dbf-633e-48ba-acd4-d4341ad80452';
    
    // URL yang sudah terbukti SUKSES di gambar kamu
    const url = `https://hackatime.hackclub.com/api/v1/users/codingShark/stats?total_seconds=true&api_key=${API_KEY}`;

    try {
        const response = await fetch(url);   
        if (!response.ok) throw new Error('Gagal ambil data');
        const result = await response.json();

        if (result.total_seconds) {
            const seconds = result.total_seconds;
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);


            badge.innerHTML = `🕒 ${hours}h ${minutes}m coded`;
            badge.style.background = "#4e8dec"; 
            
            console.log("HOREEE JALAN! 🦈✨");
        }
    } catch (error) {
        console.error("Error:", error);
        badge.textContent = "is coding hard!";
    }
}

        // Init
        realHours();
        setInterval(realHours, 30000)
        codeStats();
        createBubbles();
        renderMenu();
        checkHours();
        setInterval(checkHours, 60000);