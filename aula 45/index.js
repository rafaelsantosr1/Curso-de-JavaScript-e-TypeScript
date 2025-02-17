try {
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo');
    console.log('Fechei o arquivo');
    //é executada quando não já erros
} catch (e) {
    console.log('Tratando erro');
    // É executada quando há erros
} finally {
    console.log('FINALLY: Sempre sou executado');
    // sempre
}