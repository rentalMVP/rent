import Link from "next/link"

const Detail = ({ id }) => {
    return (
        <section style={{ background: "#161616", height:"auto", paddingTop:"50px" , paddingBottom:"50px"}}>
            <div style={{ maxWidth: "1440px", margin: "auto", padding:"50px 50px 50px 50px", background:"#3a3a3a", borderRadius:"10px", position:"relative"}} className="flex flex-col flex-nowrap" >
                <div className="flex flex-row">
                    <div style={{ width:"900px"}}>
                        <div> 
                            <div id="carouselExampleCrossfade" className="relative w-full carousel slide carousel-fade" data-bs-ride="carousel" style={{ borderRadius:"10px"}}>
                                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    ></button>
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                    ></button>
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                    ></button>
                                </div>
                                <div className="relative w-full overflow-hidden carousel-inner">
                                    <div className="float-left w-full carousel-item active">
                                    <img
                                        src="../cards/sample.webp"
                                        className="block w-full"
                                        alt="Wild Landscape"
                                    />
                                    </div>
                                    <div className="float-left w-full carousel-item">
                                    <img
                                        src="../cards/sample.webp"
                                        className="block w-full"
                                        alt="Camera"
                                    />
                                    </div>
                                    <div className="float-left w-full carousel-item">
                                    <img
                                        src="../cards/sample.webp"
                                        className="block w-full"
                                        alt="Exotic Fruits"
                                    />
                                    </div>
                                </div>
                                <button
                                    className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide="prev"
                                >
                                    <span className="inline-block bg-no-repeat carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide="next"
                                >
                                    <span className="inline-block bg-no-repeat carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>  
                        </div>
                        <div>
                            <p style={{ fontFamily:'Optima', fontStyle:"italic", fontSize:"40px", fontWeight:"700", color:"white", padding:"20px", color:"white"}}>ACLER Empire Dress - RRP $520</p>
                            <p style={{ lineHeight:"24px", fontSize:"18px", color:"white"}}>
                            "ACLER Horrock Dress (Midnight) - RRP $495<br/>
                            Australian designer label Acler combines contemporary design codes with a whimsical, feminine streak to create collections that are at once enchanting and undeniably modern. <br/>
                            Delivered in a whimsical wallpaper floral print, the Horrock Dress boasts voluminous puffed shoulders, an alluring V-neckline, and polished gold-toned hardware. Temper the vivid florals by styling yours with neutral-toned heels.<br/>
                            Our model is wearing a size AU 8 dress. She is 170.2cm (5’7”) tall with an 80.0cm (31.5”) bust, a 61.0cm (24”) waist, and 76.2cm (30”) hips.<br/>
                            - Heavyweight textured satin; non-stretch; unlined; opaque<br/>
                            - Black base; orange, white, green, and brown wallpaper floral print; gold-toned hardware<br/>
                            - Deep V-neckline<br/>
                            - Puffed shoulders<br/>
                            We also have this style available in Ivory
                            SIZE & FIT
                            We found this style to be very versatile. Size 8 will also fit a size 6 and 8. Size 10 will also fit a size 8 and 10
                            Length: 134cm
                            Dresses are available for try-on & bookings at our NORTH SYDNEY STORE at 245 Pacific Highway, North Sydney NSW 2060."<br/>
                            </p>
                        </div>
                    </div>
                    <div style={{ width:"500px", padding:"40px"}}>
                        <p style={{ fontFamily:'Oswald', fontStyle:"normal", fontSize:"50px", fontWeight:"700", color:"white", textAlign:"center"}}>Dress for a Night</p>
                        <a href="https://www.dressforanight.com.au/" style={{ marginTop:"30px", lineHeight:"24px", fontSize:"20px"}} className="flex flex-row items-center"><img src="../cards/www.svg" style={{ width:"30px", marginRight:"20px", color:"white"}}/>https://www.dressforanight.com.au/</a>
                        <p style={{ lineHeight:"24px", fontSize:"18px",marginTop:"30px", color:"white"}} className="flex flex-row items-center"><img src="../cards/address.svg" style={{ width:"30px", marginRight:"20px",whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}/> North Sydney NSW 2060</p>
                        <p style={{ marginTop:"30px", fontFamily:"Roboto", fontSize:"18px", color:"white"}} className="flex flex-row items-center font-bold">
                        <img src="../cards/review.svg" style={{ height:"30px", marginRight:"20px"}}/> 729
                        </p>
                        <div style={{ marginTop:"30px"}}>
                            <p className="flex flex-row text-center"><img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/>
                            <img src="../cards/star.svg" style={{ height:"40px"}}/></p>
                        </div>
                        
                        <button style={{ marginTop:"50px",padding:"10px 80px", fontSize:"24px", background:"white", color:"black", marginRight:"auto", marginLeft:"auto", borderRadius:"10px"}} className="flex flex-row items-center phone"><img src="../cards/call.svg" style={{ width:"30px", marginRight:"20px"}}/> (20) 8904 0635 </button>
                    </div>
                </div>
                <p style={{ fontFamily:'Optima', fontStyle:"italic  ", fontSize:"40px", fontWeight:"700", color:"white", padding:"20px", color:"white"}}>Australian Rental(Dress for Night)</p>
                <p style={{ fontFamily:'Optima', fontStyle:"normal", fontSize:"25px", fontWeight:"300", color:"white", padding:"10px 10px 10px 20px", color:"white", marginTop:"-10px"}}>Google rating 4.7(702)</p>
                
                <div className="flex flex-row" style={{ padding:"0px 0px 30px 0px", margin:"auto"}}>
                    <img src="../cards/left.svg" style={{ width:"30px"}} className="arrow_left"/>
                    <div className="flex flex-row">
                       <Link href={`cards/1`}>
                       <img src="../cards/sample.webp" style={{ width:"300px", margin:"5px", border:"solid 2px transparent", borderRadius:"10px"}} className="rental_image"/>
                       </Link>
                       <Link href={`cards/1`}>
                       <img src="../cards/sample.webp" style={{ width:"300px", margin:"5px", border:"solid 2px transparent", borderRadius:"10px"}} className="rental_image"/>
                       </Link>
                       <Link href={`cards/1`}>
                       <img src="../cards/sample.webp" style={{ width:"300px", margin:"5px", border:"solid 2px transparent", borderRadius:"10px"}} className="rental_image"/>
                       </Link>
                       <Link href={`cards/1`}>
                       <img src="../cards/sample.webp" style={{ width:"300px", margin:"5px", border:"solid 2px transparent", borderRadius:"10px"}} className="rental_image"/>
                       </Link>
                    </div>
                    <img src="../cards/left.svg" style={{ width:"30px", transform:"scaleX(-1)"}} className="arrow_right"/>
                </div>
                <div>
                    <img src='../back.png' style={{ position:"absolute", width:"70px", bottom:"30px", right:"30px"}} className="return"/>
                </div>
                
            </div>
            
        </section>
    )
}
export default Detail

