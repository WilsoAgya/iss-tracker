import InfoComponent from "./InfoComponent"
import ImageComponent from "./ImageComponent"
import Map from "./Map"

const Main= ()=>{
    return(
        <div className="row mx-auto g-3 mt-5">
        <div className="d-flex align-items-center row">
            <div className="col-10 col-md-6 bg-dark mx-auto p-0 rounded-3 shadow" style={{ height: '400px' }}>
                <Map/>
            </div>
            
            <div className="col-10 col-md-4 bg-dark mx-auto d rounded-3 py-3 px-5">
                <InfoComponent />
            </div>
        </div>
        <div className="row mx-auto my-5 g-3">
        <div className="col-10 col-md-10 mx-auto rounded-3 shadow text-center" >
            <ImageComponent/>   
        </div>
            </div>
    </div>
    )
}

export default Main