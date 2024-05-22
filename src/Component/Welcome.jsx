import './Welcome.css'

const Welcome = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 teks-ku">
                        <h2 className='hello'>Hallo, <br /> <span>ada yang bisa saya bantu?</span></h2>
                        <hr className='garis-bawah'/>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </>
    )
}

export default Welcome