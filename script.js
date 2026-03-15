// --- DATA STORE ---
        const categoryMeta = [
            { name: 'All Recipes', icon: '🍽️' },
            { name: 'Ulam', icon: '🥘', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
            { name: 'Sabaw', icon: '🥣', img: 'https://asianinspirations.com.au/wp-content/uploads/2022/07/R02988-Pork-Sinigang-619x412.jpg' },
            { name: 'Lutuin', icon: '🍳', img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=800&auto=format&fit=crop' },
            { name: 'Desserts', icon: '🍮', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
            { name: 'Appetizers', icon: '🥟', img: 'https://www.billyparisi.com/wp-content/uploads/2025/06/lumpia-2.jpg' },
            { name: 'Beverages', icon: '🍹', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop' }
        ];

        const recipesData = [
            {
                id: 'afritada', title: 'Chicken Afritada', cost: 250, category: 'Ulam',
                img: 'https://www.jocooks.com/wp-content/uploads/2024/10/chicken-afritada-1-20.jpg',
                time: '60 mins', servings: '4-6', isPopular: false,
                desc: 'Chicken Afritada is a classic Filipino tomato-based stew. It features chicken simmered with potatoes, carrots, and bell peppers in a rich, savory sauce, making it a colorful and hearty meal often served at family gatherings.',
                ingredients: [
                    '1 kg Chicken, cut into serving pieces', '2 medium Potatoes, cubed', '1 large Carrot, sliced into rounds',
                    '1 medium Red bell pepper, sliced', '1 medium Green bell pepper, sliced', '1 cup Tomato sauce',
                    '1 cup Water or chicken broth', '1 medium Onion, chopped', '4 cloves Garlic, minced',
                    '2 pieces Dried bay leaves', '2 tbsp Fish sauce (Patis)', '1/2 tsp Ground black pepper', '2 tbsp Cooking oil'
                ],
                instructions: [
                    'Heat cooking oil in a pan and fry the potatoes and carrots until the edges are lightly browned, then set aside.',
                    'In the same pan, sauté the garlic and onions until fragrant.',
                    'Add the chicken pieces and cook until browned on all sides.',
                    'Pour in the fish sauce and stir for a minute, then add the tomato sauce, water, and bay leaves.',
                    'Bring to a boil, then lower the heat and simmer for 20 to 25 minutes until the chicken is tender.',
                    'Add the fried potatoes and carrots back into the pan.',
                    'Add the bell peppers and simmer for 5 minutes until vegetables are cooked and sauce has thickened.',
                    'Season with salt and pepper to taste before serving hot.'
                ],
                ytLink: 'https://www.youtube.com/watch?v=ggM-5VyuJW8', ytImg: 'ggM-5VyuJW8'
            },
            {
                id: 'adobo', title: 'Classic Chicken Adobo', cost: 150, category: 'Ulam',
                img: 'https://www.butterbeready.com/wp-content/uploads/2021/10/DK6A1906-680x1020.jpg',
                time: '45 mins', servings: '4', isPopular: true,
                desc: 'The unofficial national dish of the Philippines. Savory, slightly sweet, and tangy chicken stewed in soy sauce and vinegar with garlic and peppercorns.',
                ingredients: ['1 kg Chicken cuts', '1/2 cup Soy sauce', '1/3 cup White vinegar', '1 head Garlic, crushed', '1 tsp Whole black peppercorns', '3 Dried bay leaves', '1 tbsp Sugar', '1 cup Water'],
                instructions: [
                    'Combine chicken, soy sauce, garlic, peppercorns, and bay leaves in a pot. Marinate for 30 minutes.',
                    'Add water and bring to a boil.',
                    'Lower heat, cover and simmer for 20 minutes.',
                    'Add vinegar (do not stir) and simmer for another 10 minutes.',
                    'Add sugar and simmer uncovered until sauce thickens and chicken is tender.',
                    'Serve hot with steamed rice.'
                ],
                ytLink: '#', ytImg: 'placeholder'
            },
            {
                id: 'sinigang', title: 'Pork Sinigang', cost: 250, category: 'Sabaw',
                img: 'https://asianinspirations.com.au/wp-content/uploads/2022/07/R02988-Pork-Sinigang-619x412.jpg',
                time: '60 mins', servings: '4-6', isPopular: true,
                desc: 'A sour and savory soup featuring pork belly and fresh vegetables, traditionally soured with tamarind.',
                ingredients: ['1 kg Pork belly, cubed', '1 pack Tamarind soup mix', '1 bunch Kangkong (Water spinach)', '2 Tomatoes, quartered', '1 Onion, sliced', '1 Radish, sliced', '2 Eggplants, sliced', 'Fish sauce to taste'],
                instructions: ['Boil pork with onions and tomatoes until tender (about 40 mins).', 'Add tamarind mix and simmer.', 'Add radish and eggplant, cook for 5 mins.', 'Add kangkong, turn off heat.', 'Season with fish sauce. Serve hot.']
            },
            {
                id: 'karekare', title: 'Beef Kare-Kare', cost: 350, category: 'Ulam',
                img: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_728,h_546/k%2FPhoto%2FRecipes%2F2024-09-kare-kare%2Fkare-kare-3458',
                time: '120 mins', servings: '6', isPopular: true,
                desc: 'A rich and thick peanut stew made with beef tripe or oxtail, served with sautéed shrimp paste (bagoong).',
                ingredients: ['1 kg Oxtail or Beef cuts', '1 cup Peanut butter', '1/2 cup Toasted rice flour', '1 Banana heart', '1 bundle Pechay', '1 bundle String beans', 'Annatto powder for color', 'Bagoong (Shrimp paste) for serving'],
                instructions: ['Boil beef until very tender.', 'Prepare annatto water.', 'Sauté garlic and onions, add beef broth, peanut butter, and rice flour mixture to thicken.', 'Cook vegetables separately or in the sauce.', 'Serve with bagoong.']
            },
            {
                id: 'lecheflan', title: 'Leche Flan', cost: 120, category: 'Desserts',
                img: 'https://bitesbybianca.com/wp-content/uploads/2024/12/filipino-leche-flan-1.jpg',
                time: '60 mins', servings: '8', isPopular: false,
                desc: 'A rich custard dessert with a layer of soft caramel on top.',
                ingredients: ['10 Egg yolks', '1 can Condensed milk', '1 can Evaporated milk', '1 tsp Vanilla extract', '1 cup Sugar (for caramel)'],
                instructions: ['Melt sugar in a llanera until amber colored.', 'Gently mix egg yolks, condensed milk, evap milk, and vanilla.', 'Strain mixture into llanera over the caramel.', 'Cover with foil and steam for 45 mins.', 'Chill before serving.']
            },
            {
                id: 'gulaman', title: "Sago't Gulaman", cost: 80, category: 'Beverages',
                img: 'https://thegridfoodmarket.com/cdn/shop/products/Sago_tGulaman_700x.jpg?v=1629990481',
                time: '30 mins', servings: '4', isPopular: false,
                desc: 'A refreshing Filipino sweet beverage made with brown sugar syrup, tapioca pearls, and jelly.',
                ingredients: ['1 cup cooked Sago (Tapioca pearls)', '1 block Agar-agar (Gulaman) cooked and cubed', '2 cups Brown sugar', '3 cups Water', 'Ice cubes'],
                instructions: ['Boil water and brown sugar to make syrup.', 'Let syrup cool.', 'In a glass, add ice, sago, and gulaman cubes.', 'Pour the sweet syrup. Serve cold.']
            },
            {
                id: 'lumpia', title: 'Lumpiang Shanghai', cost: 180, category: 'Appetizers',
                img: 'https://www.billyparisi.com/wp-content/uploads/2025/06/lumpia-2.jpg',
                time: '45 mins', servings: '20 pieces', isPopular: false,
                desc: 'Crispy deep-fried spring rolls filled with a savory mixture of minced pork, carrots, and onions.',
                ingredients: ['500g Ground pork', '1 cup Minced carrots', '1/2 cup Minced onions', '2 cloves Garlic, minced', '1 Egg', 'Lumpia wrappers', 'Salt and pepper', 'Oil for frying'],
                instructions: ['Mix pork, carrots, onions, garlic, egg, salt, and pepper.', 'Place a spoonful of filling on a wrapper and roll tightly, sealing edges with water.', 'Deep fry until golden brown and crispy.', 'Serve with sweet chili sauce.']
            },
            {
                id: 'tinola', title: 'Chicken Tinola', cost: 190, category: 'Sabaw',
                img: 'https://cdn.shortpixel.ai/spai2/q_glossy+w_617+to_auto+ret_img/www.hungryhuy.com/wp-content/uploads/chicken-tinola-bowl.jpg',
                time: '45 mins', servings: '4-5', isPopular: false,
                desc: 'A comforting, ginger-flavored chicken soup with green papaya and chili leaves.',
                ingredients: ['1 kg Chicken', '1 Green papaya, wedged', '1 thumb Ginger, sliced', '1 Onion, sliced', 'Chili leaves or Malunggay', 'Fish sauce'],
                instructions: ['Sauté ginger, garlic, and onion.', 'Add chicken and cook until light brown.', 'Add water and simmer until chicken is tender.', 'Add papaya and cook until soft.', 'Season with fish sauce and add leaves last.']
            }
        ];

        let currentCategory = 'All Recipes';

        // --- CORE NAVIGATION LOGIC ---
        function navigateTo(viewId) {
            // Update active state in nav
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('data-target') === viewId) {
                    link.classList.add('active');
                }
            });

            // Hide all views
            document.querySelectorAll('.view-section').forEach(view => {
                view.classList.remove('active');
            });

            // Show selected view
            const targetView = document.getElementById(`${viewId}-view`);
            if(targetView) {
                targetView.classList.add('active');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();

            // Run specific logic per view
            if (viewId === 'recipes') {
                renderRecipes();
                renderSidebar();
            } else if (viewId === 'categories') {
                renderCategoriesPage();
            }
        }

        // --- RENDER LOGIC ---
        function renderCardHTML(recipe) {
            return `
                <div class="recipe-card" onclick="showRecipeDetail('${recipe.id}')">
                    <img src="${recipe.img}" alt="${recipe.title}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'">
                    <div class="recipe-card-body">
                        <h4>${recipe.title}</h4>
                        <div class="cost-label">Cost to Make at Home</div>
                        <div class="price">₱${recipe.cost}</div>
                        <span class="category-badge">${recipe.category}</span>
                    </div>
                </div>
            `;
        }

        function renderPopular() {
            const grid = document.getElementById('popular-grid');
            const populars = recipesData.filter(r => r.isPopular).slice(0, 3);
            grid.innerHTML = populars.map(renderCardHTML).join('');
        }

        function renderRecipes(searchQuery = '') {
            const grid = document.getElementById('recipes-grid');
            let filtered = recipesData;

            if (currentCategory !== 'All Recipes') {
                filtered = filtered.filter(r => r.category === currentCategory);
            }

            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                filtered = filtered.filter(r => r.title.toLowerCase().includes(q) || r.category.toLowerCase().includes(q));
            }

            if (filtered.length === 0) {
                grid.innerHTML = `<div class="empty-state"><h3>No recipes found.</h3><p>Try adjusting your search or category filter.</p></div>`;
            } else {
                grid.innerHTML = filtered.map(renderCardHTML).join('');
            }
        }

        function renderSidebar() {
            const list = document.getElementById('category-filter-list');
            
            const html = categoryMeta.map(cat => {
                const count = cat.name === 'All Recipes' ? recipesData.length : recipesData.filter(r => r.category === cat.name).length;
                const isActive = currentCategory === cat.name ? 'active' : '';
                return `
                    <li class="category-item ${isActive}" onclick="setCategory('${cat.name}')">
                        <span class="cat-icon">${cat.icon}</span>
                        <span class="cat-name">${cat.name}</span>
                        <span class="cat-count">${count}</span>
                    </li>
                `;
            }).join('');
            
            list.innerHTML = html;
        }

        function renderCategoriesPage() {
            const grid = document.getElementById('large-categories-grid');
            const html = categoryMeta.filter(c => c.name !== 'All Recipes').map(cat => `
                <div class="category-box" onclick="goToCategory('${cat.name}')">
                    <img src="${cat.img}" alt="${cat.name}">
                    <div class="category-box-overlay">
                        <h3>${cat.name}</h3>
                    </div>
                </div>
            `).join('');
            grid.innerHTML = html;
        }

        function showRecipeDetail(id) {
            const recipe = recipesData.find(r => r.id === id);
            if (!recipe) return;

            const container = document.getElementById('detail-container');
            
            // Build ingredients list
            const ingredientsHTML = recipe.ingredients 
                ? recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')
                : '<li>Ingredients info coming soon.</li>';

            // Build instructions list
            const instructionsHTML = recipe.instructions
                ? recipe.instructions.map(inst => `<li>${inst}</li>`).join('')
                : '<li>Instructions info coming soon.</li>';

            // Optional YouTube Block
            let ytHTML = '';
            if (recipe.ytLink && recipe.ytImg !== 'placeholder') {
                ytHTML = `
                    <div style="position: relative; margin-top: 2rem; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); background-color: #000;">
                        <a href="${recipe.ytLink}" target="_blank" rel="noopener noreferrer" style="display: block; position: relative; text-decoration: none;">
                            <img src="https://img.youtube.com/vi/${recipe.ytImg}/sddefault.jpg" alt="Watch Tutorial" style="width: 100%; display: block; opacity: 0.85;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 68px; height: 48px; background-color: rgba(255, 0, 0, 0.9); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </a>
                    </div>
                    <p style="text-align: center; font-size: 0.85rem; margin-top: 0.75rem; color: #666;">
                        <em>Click the image to watch the tutorial directly on YouTube.</em>
                    </p>
                `;
            }

            container.innerHTML = `
                <div class="recipe-image-header" style="margin: 0 -3rem; border-radius: var(--radius) var(--radius) 0 0;">
                    <img src="${recipe.img}" alt="${recipe.title}">
                </div>
                
                <div style="margin-top: 2rem;">
                    <div class="recipe-main-header">
                        <div class="title-area">
                            <h1>${recipe.title}</h1>
                            <div class="recipe-badges">
                                <span>🕒 ${recipe.time}</span>
                                <span>👥 ${recipe.servings} servings</span>
                                <span>${recipe.category}</span>
                            </div>
                        </div>
                        <div class="cost-card">
                            <p class="cost-label">COST TO MAKE AT HOME</p>
                            <p class="cost-price">₱${recipe.cost}</p>
                            <p class="cost-subtext">Estimated cost of ingredients to prepare this recipe at home.</p>
                        </div>
                    </div>

                    <div class="about-card">
                        <h3>About this Recipe</h3>
                        <p>${recipe.desc}</p>
                    </div>

                    <div class="recipe-grid">
                        <div class="ingredients-column">
                            <h3>Ingredients</h3>
                            <ul class="screenshot-style-list">
                                ${ingredientsHTML}
                            </ul>
                        </div>
                        <div class="instructions-column">
                            <h3>Instructions</h3>
                            <ol class="screenshot-style-steps">
                                ${instructionsHTML}
                            </ol>
                            ${ytHTML}
                        </div>
                    </div>
                </div>
            `;

            // Display view
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
            document.getElementById('recipe-detail-view').classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- INTERACTION HANDLERS ---
        function setCategory(catName) {
            currentCategory = catName;
            document.getElementById('recipe-search').value = ''; // Clear search
            renderSidebar();
            renderRecipes();
        }

        function goToCategory(catName) {
            currentCategory = catName;
            navigateTo('recipes');
        }

        function handleSearch() {
            const query = document.getElementById('recipe-search').value;
            renderRecipes(query);
        }

        function toggleMenu() {
            document.getElementById('main-nav').classList.toggle('show');
        }

        function closeMenu() {
            document.getElementById('main-nav').classList.remove('show');
        }

        // --- INITIALIZATION ---
        window.onload = () => {
            renderPopular();
            navigateTo('home');
        };