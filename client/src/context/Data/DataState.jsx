import DataContext from "./DataContext";

const DataState = (props)=>{

    const userRows = [
        {
          id: 1,
          username: "Snow",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          status: "active",
          email: "1snow@gmail.com",
          age: 35,
        },
        {
          id: 2,
          username: "Jamie Lannister",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "2snow@gmail.com",
          status: "passive",
          age: 42,
        },
        {
          id: 3,
          username: "Lannister",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "3snow@gmail.com",
          status: "pending",
          age: 45,
        },
        {
          id: 4,
          username: "Stark",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "4snow@gmail.com",
          status: "active",
          age: 16,
        },
        {
          id: 5,
          username: "Targaryen",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "5snow@gmail.com",
          status: "passive",
          age: 22,
        },
        {
          id: 6,
          username: "Melisandre",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "6snow@gmail.com",
          status: "active",
          age: 15,
        },
        {
          id: 7,
          username: "Clifford",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "7snow@gmail.com",
          status: "passive",
          age: 44,
        },
        {
          id: 8,
          username: "Frances",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "8snow@gmail.com",
          status: "active",
          age: 36,
        },
        {
          id: 9,
          username: "Roxie",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "snow@gmail.com",
          status: "pending",
          age: 65,
        },
        {
          id: 10,
          username: "Roxie",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "snow@gmail.com",
          status: "active",
          age: 65,
        },
        {
            id: 11,
            username: "Roxie",
            img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
            email: "snow@gmail.com",
            status: "active",
            age: 65,
        },
        {
            id: 12,
            username: "Roxie",
            img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
            email: "snow@gmail.com",
            status: "active",
            age: 65,
        },
    ];

    const productRows = [
        {
          id: 1,
          username: "Snow",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          status: "active",
          email: "1snow@gmail.com",
          age: 35,
        },
        {
          id: 2,
          username: "Jamie Lannister",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "2snow@gmail.com",
          status: "passive",
          age: 42,
        },
        {
          id: 3,
          username: "Lannister",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "3snow@gmail.com",
          status: "pending",
          age: 45,
        },
        {
          id: 4,
          username: "Stark",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "4snow@gmail.com",
          status: "active",
          age: 16,
        },
        {
          id: 5,
          username: "Targaryen",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "5snow@gmail.com",
          status: "passive",
          age: 22,
        },
        {
          id: 6,
          username: "Melisandre",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "6snow@gmail.com",
          status: "active",
          age: 15,
        },
        {
          id: 7,
          username: "Clifford",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "7snow@gmail.com",
          status: "passive",
          age: 44,
        },
        {
          id: 8,
          username: "Frances",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "8snow@gmail.com",
          status: "active",
          age: 36,
        },
        {
          id: 9,
          username: "Roxie",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "snow@gmail.com",
          status: "pending",
          age: 65,
        },
        {
          id: 10,
          username: "Roxie",
          img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
          email: "snow@gmail.com",
          status: "active",
          age: 65,
        },
        {
            id: 11,
            username: "Roxie",
            img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
            email: "snow@gmail.com",
            status: "active",
            age: 65,
        },
        {
            id: 12,
            username: "Roxie",
            img: "https://fastly.picsum.photos/id/156/200/200.jpg?hmac=KnlRQ53fEPGMd_XV3T4ZcqXyxVzq8gUJqa8S0emtDrY",
            email: "snow@gmail.com",
            status: "active",
            age: 65,
        },
      ];

    return (
        <DataContext.Provider value={{userRows, productRows}}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataState;