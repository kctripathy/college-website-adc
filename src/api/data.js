export const loadJsonData = (fileName) => {
    let url = `../data/${fileName}.json`;
    return fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            return response.json()
        })
        // .then(data => {
        //     return data
        // })
        .catch(err => {
            return (err)
        })
};

// let url = quizId || this.props.quizId;
//     fetch(`../${url}`).then(res => res.json()).then(res => {
//       let quiz = res;
//       quiz.questions.forEach(q => {
//         q.options.forEach(o => o.selected = false);
//       });
//       quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
//       this.pager.count = quiz.questions.length / this.pager.size;
//       this.props.onQuizLoad(quiz);
//       this.props.onPagerUpdate(this.pager);
//     });