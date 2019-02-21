<script>
    const submitButton = document.getElementsByTagName('button')[0];
    submitButton.addEventListener('click', addItem);
    function checkEnter(event) {
        event.code === 'Enter' ? addItem() : console.log('press enter')
        // if (event.code === 'Enter') {
        //     console.log(event, 'event');
        //     addItem();
        // }
    }
    function addItem() {
        const itemInput = document.getElementById('newItemInput');
        if (!itemInput.value) {
            return;
        }
        console.log('new item', itemInput.value );
        const newItem = create();
        const deleteButton = createDelete();
        deleteButton.addEventListener('click', deleteItem);
        deleteButton.innerText = 'X';
        deleteButton.style.margin = '4px';
        newItem.appendChild(deleteButton);
        newItem.appendChild(document.createTextNode(itemInput.value));

        const ul = document.getElementsByTagName('ul')[0];
        ul.appendChild(newItem);
        itemInput.value = '';
    }

    function create() {
        return document.createElement('li');
    }

    function createDelete() {
        return document.createElement('button');
    }

    function deleteItem() {
        console.log('button', this);
        const canDelete = confirm('Are you sure you want to delete: ' + this.nextSibling.textContent);
        if (canDelete) {
            this.parentNode.remove();
        }
    }

</script>
