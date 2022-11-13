import Loading from "./loading"

import GalleryItem from "./galleryItem"

const Gallery = ({ showData, lastPage }) => {
    const load = () => {
        if (true)
            return <Loading />
        else return (<div></div>);
    }

    return (
        <section style={{ background: "#161616" }}>
            <div className="flex flex-row flex-wrap justify-center gap-8 card_list" style={{ margin: "auto", maxWidth: "1440px", height: "auto", paddingTop: "100px", paddingBottom: "50px", background: '#161616' }} >
                {
                    showData && showData.length > 0 && showData.map(({ fields, id }, index) => (
                        <GalleryItem fields={fields} index={index} id={id} />
                    ))
                }
            </div>
            {
                lastPage ? '' : load()
            }
        </section>
    )
}
export default Gallery
