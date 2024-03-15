<template>
    <section class="project-cards container">
        <div class="buttons">
            <button 
                @click="filterCards(btn)"
                class="btn text" 
                v-for="btn in btnList">
                    {{btn}}</button>
        </div>
        <div class="card-grid">
            <ProjectCardComponent v-for="card in filteredCardList" :key="card.id" :card="card"/>
        </div>
        <div class="articles__pagination">
            <div class="articles__pagination__link current">01</div>
            <div class="articles__pagination__link">02</div>
            <div class="articles__pagination__link">03</div>
            <div class="articles__pagination__link next-page">
            <svg
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M1 19L9 10L1 1"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
            </svg>
            </div>
      </div>
    </section>
</template>

<script>
import ProjectCardComponent from './ProjectCardComponent.vue';
    export default {
        components: {
            ProjectCardComponent,
        },
        data() {
            return {
                isActive: false,
                btnList: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
                cardList: [
                    {
                        id: 1,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom1.jpg'),
                        name: 'Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 2,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom2.jpg'),
                        name: 'Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 3,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom3.jpg'),
                        name: 'Classic Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 4,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom4.jpg'),
                        name: 'Modern Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 5,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom5.jpg'),
                        name: 'Minimal Bedroom table',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 6,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom6.jpg'),
                        name: 'System Table',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 7,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom7.jpg'),
                        name: 'Modern Medroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 8,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom8.jpg'),
                        name: 'Modern Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 9,
                        teg: "Bathroom",
                        img: require('@/assets/ProjectImg/bathroom1.jpg'),
                        name: 'Minimal Bathroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 10,
                        teg: "Bathroom",
                        img: require('@/assets/ProjectImg/bathroom2.jpg'),
                        name: 'Minimal Bathroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 11,
                        teg: "Bathroom",
                        img: require('@/assets/ProjectImg/bathroom3.jpg'),
                        name: 'Minimal Bathroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 12,
                        teg: "Bathroom",
                        img: require('@/assets/ProjectImg/bathroom4.jpg'),
                        name: 'Minimal Bathroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 13,
                        teg: "Bathroom",
                        img: require('@/assets/ProjectImg/bathroom5.jpg'),
                        name: 'Minimal Bathroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 14,
                        teg: "Kitchan",
                        img: require('@/assets/ProjectImg/kitchan1.jpg'),
                        name: 'Minimal Kitchan',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 15,
                        teg: "Kitchan",
                        img: require('@/assets/ProjectImg/kitchan2.jpg'),
                        name: 'Minimal Kitchan',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 16,
                        teg: "Kitchan",
                        img: require('@/assets/ProjectImg/kitchan3.jpg'),
                        name: 'Minimal Kitchan',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 17,
                        teg: "Kitchan",
                        img: require('@/assets/ProjectImg/kitchan4.jpg'),
                        name: 'Minimal Kitchan',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 18,
                        teg: "Kitchan",
                        img: require('@/assets/ProjectImg/kitchan5.jpg'),
                        name: 'Minimal Kitchan',
                        path: 'Decor / Artchitecture'
                    },
                ],
                filteredCardList: [
                    {
                        id: 1,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom1.jpg'),
                        name: 'Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 2,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom2.jpg'),
                        name: 'Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 3,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom3.jpg'),
                        name: 'Classic Minimal Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 4,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom4.jpg'),
                        name: 'Modern Bedroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 5,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom5.jpg'),
                        name: 'Minimal Bedroom table',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 6,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom6.jpg'),
                        name: 'System Table',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 7,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom7.jpg'),
                        name: 'Modern Medroom',
                        path: 'Decor / Artchitecture'
                    },
                    {
                        id: 8,
                        teg: "Bed Room",
                        img: require('@/assets/ProjectImg/bedroom8.jpg'),
                        name: 'Modern Bedroom',
                        path: 'Decor / Artchitecture'
                    }
                ]
            }
        },
        methods: {
            filterCards(card) {
                this.filteredCardList = this.cardList.filter(el => card === el.teg);
                const btns = document.querySelectorAll('.btn');
                btns.forEach(el => el.classList.remove('active'));
                event.currentTarget.classList.add('active');
            },
        },
        
    }
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.project-cards {
    text-align: center;
    margin-bottom: 200px;
}
.card-grid {
    column-count: 2;
    gap: 30px;
}
.text {
    font-size: 18px;
    font-weight: 600;
}
.buttons {
    border: 1px solid;
    border-color: #CDA274;
    border-radius: 18px;
    text-align: center;
    display: inline-block;
    margin-bottom: 60px;
}
.btn {
    border-radius: 18px;
    border-style: none;
    padding: 26px 66px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #CDA274;
        color: #fff;
    }
}
.active {
        background-color: #CDA274;
        color: #fff;
    }
.articles__pagination {
    margin-top: 60px;

}
</style>