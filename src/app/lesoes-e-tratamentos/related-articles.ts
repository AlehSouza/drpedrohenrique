interface IArticle {
    title: string;
    path: string;
    image?: string;
    relatedArticles: string[];
}

export const articles: Record<string, IArticle> = {
    'artrose': {
        title: 'Artrose',
        path: '/lesoes-e-tratamentos/artrose',
        image: '',
        relatedArticles: [
            'artrose-e-exercicios-o-que-voce-precisa-saber-para-conviver-com-a-doenca-articular',
            'cirurgia-de-artrose-o-que-esperar-e-como-funciona',
            'como-identificar-e-tratar-a-artrose',
            'diagnostico-e-lesoes-associadas-a-atrose',
            'e-possivel-recuperar-a-artrose-sem-cirurgia',
        ],
    },
    'artrose-e-exercicios-o-que-voce-precisa-saber-para-conviver-com-a-doenca-articular': {
        title: 'Artrose',
        path: '/lesoes-e-tratamentos/artrose',
        image: '',
        relatedArticles: [],
    },
    'cirurgia-de-artrose-o-que-esperar-e-como-funciona': {
        title: 'Artrose',
        path: '/lesoes-e-tratamentos/artrose',
        image: '',
        relatedArticles: [],
    },
    'como-identificar-e-tratar-a-artrose': {
        title: 'Artrose',
        path: '/lesoes-e-tratamentos/artrose',
        image: '',
        relatedArticles: [],
    },
    'diagnostico-e-lesoes-associadas-a-atrose': {
        title: 'Artrose',
        path: '/lesoes-e-tratamentos/artrose',
        image: '',
        relatedArticles: [],
    },
    'e-possivel-recuperar-a-artrose-sem-cirurgia': {
        title: 'Artrose',
        path: '/lesoes-e-tratamentos/artrose',
        image: '',
        relatedArticles: [],
    },


    'lca': {
        title: 'LCA',
        path: '/lesoes-e-tratamentos/lca',
        image: '',
        relatedArticles: [
            'como-funciona-a-cirurgia-para-lesao-do-lca',
            'como-saber-se-tenho-uma-lesao-de-lca',
            'o-que-pode-e-o-que-nao-pode-fazer-com-lesao-de-lca',
            'pos-operatorio-de-cirurgia-de-lca',
        ],
    },
    'como-funciona-a-cirurgia-para-lesao-do-lca': {
        title: 'LCA',
        path: '/lesoes-e-tratamentos/lca',
        image: '',
        relatedArticles: [],
    },
    'como-saber-se-tenho-uma-lesao-de-lca': {
        title: 'LCA',
        path: '/lesoes-e-tratamentos/lca',
        image: '',
        relatedArticles: [],
    },
    'o-que-pode-e-o-que-nao-pode-fazer-com-lesao-de-lca': {
        title: 'LCA',
        path: '/lesoes-e-tratamentos/lca',
        image: '',
        relatedArticles: [],
    },
    'pos-operatorio-de-cirurgia-de-lca': {
        title: 'LCA',
        path: '/lesoes-e-tratamentos/lca',
        image: '',
        relatedArticles: [],
    },


    'menisco': {
        title: 'Menisco',
        path: '/lesoes-e-tratamentos/menisco',
        image: '',
        relatedArticles: [
            'cirurgia-do-menisco-quando-e-necessaria-e-como-funciona',
            'diagnostico-da-lesao-meniscal-como-saber-se-o-menisco-esta-rompido',
            'lesoes-do-menisco-tipos-sintomas-e-tratamentos',
            'menisco-como-tratar-e-cicatrizar-com-sucesso',
            'menisco-o-que-e-funcao-e-causas-das-lesoes',
        ],
    },
    'cirurgia-do-menisco-quando-e-necessaria-e-como-funciona': {
        title: 'Menisco',
        path: '/lesoes-e-tratamentos/menisco',
        image: '',
        relatedArticles: [],
    },
    'diagnostico-da-lesao-meniscal-como-saber-se-o-menisco-esta-rompido': {
        title: 'Menisco',
        path: '/lesoes-e-tratamentos/menisco',
        image: '',
        relatedArticles: [],
    },
    'lesoes-do-menisco-tipos-sintomas-e-tratamentos': {
        title: 'Menisco',
        path: '/lesoes-e-tratamentos/menisco',
        image: '',
        relatedArticles: [],
    },
    'menisco-como-tratar-e-cicatrizar-com-sucesso': {
        title: 'Menisco',
        path: '/lesoes-e-tratamentos/menisco',
        image: '',
        relatedArticles: [],
    },
    'menisco-o-que-e-funcao-e-causas-das-lesoes': {
        title: 'Menisco',
        path: '/lesoes-e-tratamentos/menisco',
        image: '',
        relatedArticles: [],
    },
}


export const getRelatedArticles = (article: string): IArticle[] => {
    return (articles[article]?.relatedArticles ?? []).reduce((acc: IArticle[], curr) => {
        if (articles[curr]) {
            acc.push(articles[curr]);
        }
        return acc;
    }, [])
}