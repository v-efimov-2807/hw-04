function dz4(N) {
    let arr1 = [...Array(N).keys()].map(x => ++x);
    arr1 = arr1.sort(() => {
        return Math.random() - 0.5;
    });

    let arr2 = arr1.slice(); //Создаю независимую копию
    arr2.reverse();

    let arr3 = arr1.map((value, index) => { 
        return value - arr2[index] 
    });

    let average = arr3.reduce((a, b) => (a + b)) / N;
    // На этом ДЗ окончена

    
    //Попытки сделать DOM узлы
    {
        const main = document.getElementById("answers");
        
        
        //1
        const firstTask = document.createElement('div');
        firstTask.className = "answer";
        main.appendChild(firstTask);

        const firstDescription = document.createElement("div");
        firstDescription.className = "answer__description";
        firstDescription.innerText = "Случайный Массив";
        firstTask.appendChild(firstDescription);

        const firstContent = document.createElement("div");
        firstContent.className = "answer__content";
        firstContent.innerText = arr1;
        firstTask.appendChild(firstContent);

        //2
        const secondTask = document.createElement('div');
        secondTask.className = "answer";
        main.appendChild(secondTask);

        const secondDescription = document.createElement("div");
        secondDescription.className = "answer__description";
        secondDescription.innerText = "Перевернутый массив";
        secondTask.appendChild(secondDescription);

        const secondContent = document.createElement("div");
        secondContent.className = "answer__content";
        secondContent.innerText = arr2;
        secondTask.appendChild(secondContent);

        //3
        const thirdTask = document.createElement('div');
        thirdTask.className = "answer";
        main.appendChild(thirdTask);

        const thirdDescription = document.createElement("div");
        thirdDescription.className = "answer__description";
        thirdDescription.innerText = "Разность массивов";
        thirdTask.appendChild(thirdDescription);

        const thirdContent = document.createElement("div");
        thirdContent.className = "answer__content";
        thirdContent.innerText = arr3;
        thirdTask.appendChild(thirdContent);

        //4
        const fourthTask = document.createElement('div');
        fourthTask.className = "answer";
        main.appendChild(fourthTask);

        const fourthDescription = document.createElement("div");
        fourthDescription.className = "answer__description lastTask";
        fourthDescription.innerText = "Среднее арифметическое";
        fourthTask.appendChild(fourthDescription);

        const fourthContent = document.createElement("div");
        fourthContent.className = "answer__content lastTask";
        fourthContent.innerText = average;
        fourthTask.appendChild(fourthContent);
    }
}