import Container from "../../../Components/Container";

const Location = () => {
    return (
        <div className="my-12">
            <Container>
             <h2 className="text-4xl font-bold mb-5 text-center">Where we are</h2>
             <p className="text-center text-xl mb-3 text-blue-800">Our head office is right now no Sadar road, Barishal, Bangladesh</p>
             <div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6755858442775!2d90.36909342529286!3d22.7031176281741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375534089f1c9b15%3A0x5ff60bb584b0dfc9!2sSadar%20Road%2C%20Barishal!5e0!3m2!1sen!2sbd!4v1697737102658!5m2!1sen!2sbd" width="100%" height="450"></iframe>
             </div>

            </Container>
        </div>
    );
};

export default Location;