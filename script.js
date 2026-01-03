fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('product-list');
        data.forEach(item => {
            const card = `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${item.name}</h2>
                        <p class="text-gray-600 text-sm mb-4">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-red-500 font-bold text-lg">NT$ ${item.price}</span>
                            <a href="${item.contact}" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                                我要購買
                            </a>
                        </div>
                    </div>
                </div>
            `;
            list.innerHTML += card;
        });
    });