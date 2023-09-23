import PhonesCards from "./PhonesCards";


const Phones = ({phones}) => {
    return (

        <div>
            <h2 className="text-2xl text-center">Our Phones Collections</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    phones?.map(phone => <PhonesCards phone={phone} key={phone.id}></PhonesCards>)
                }
            </div>
            
        </div>
    );
};

export default Phones;