import WhatsNewItem from './whatsNewItem'

export default function WhatsNewSection() {
    return (
        <section className="w-full py-8 lg:py-0">
            <h1 className="mt-8 lg:mt-14 text-3xl sm:text-4xl font-light text-center lg:text-left">
                What's New
            </h1>
            <div className='space-y-8 sm:space-y-10 lg:space-y-12 mt-6 sm:mt-8 lg:mt-10'>
                <WhatsNewItem content="" imgLink="/iom.png" pageLink="" title="Redlight Therapy Mask" />
                <WhatsNewItem content="" imgLink="/iom.png" pageLink="" title="Nekesa Magic 1 Stemer" />
            </div>
        </section>
    )
}