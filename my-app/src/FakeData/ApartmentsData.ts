export interface ApartmentType {
    id: number;
    name: string;
    location: string;
    price: string;
    reviewscount: number;
    overviewimages: string[];
    hostName?: string;
    hostImage?: string;
    hostJoined?: string;
    map?: {
      latitude: number,
      longitude: number,
    }
}
  
export const ApartmentsData = async ():Promise<ApartmentType[]> => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const Apartments: ApartmentType[] = [
    {
      id: 1,
      name: "Luxury Apartment",
      location: "CasaBlanca, MOROCCO",
      price: "$1200/month",
      reviewscount: 5,
      overviewimages: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1605886290933-7ed7b3240d4a?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 2,
      name: "Modern Studio",
      location: "Wahran, Algery",
      price: "$900/month",
      reviewscount: 15,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
      map: {
        latitude: 35.6895,
        longitude: -5.8128,
      }
    },
    {
      id: 3,
      name: "Cozy Loft",
      location: "CasaBlanca, MOROCCO",
      price: "$1100/month",
      reviewscount: 10,
      overviewimages: [
        "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 4,
      name: "Downtown Condo",
      location: "CasaBlanca, MOROCCO",
      price: "$1500/month",
      reviewscount: 10,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 5,
      name: "Beachfront Villa",
      location: "CasaBlanca, MOROCCO",
      price: "$2000/month",
      reviewscount: 6,
      overviewimages: [
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 6,
      name: "Penthouse Suite",
      location: "Marakech, MOROCCO",
      price: "$2500/month",
      reviewscount: 50,
      overviewimages: [
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 7,
      name: "Suburban Home",
      location: "Tangier, MOROCCO",
      price: "$1300/month",
      reviewscount: 13,
      overviewimages: [
        "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 8,
      name: "City View Apartment",
      location: "Marakech, MOROCCO",
      price: "$1400/month",
      reviewscount: 8,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 9,
      name: "Mountain Retreat",
      location: "Marakech, MOROCCO",
      price: "$1250/month",
      reviewscount: 40,
      overviewimages: [
        "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 10,
      name: "Lakefront Cottage",
      location: "Marakech, MOROCCO",
      price: "$1600/month",
      reviewscount: 12,
      overviewimages: [
        "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 11,
      name: "Industrial Loft",
      location: "Fes, MOROCCO",
      price: "$1150/month",
      reviewscount: 0,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 12,
      name: "Historic Brownstone",
      location: "Fes, MOROCCO",
      price: "$1450/month",
      reviewscount: 1,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 13,
      name: "Luxury Apartment",
      location: "Agadir, MOROCCO",
      price: "$1200/month",
      reviewscount: 2,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 14,
      name: "Modern Studio",
      location: "Agadir, MOROCCO",
      price: "$900/month",
      reviewscount: 15,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
    {
      id: 15,
      name: "Cozy Loft",
      location: "Tangier, MOROCCO",
      price: "$1100/month",
      reviewscount: 14,
      overviewimages: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D",
        "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5ifGVufDB8MHwwfHx8Mg%3D%3D"
      ],
      hostName: "Karim Benzaoui",
      hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      hostJoined: "January 2020",
    },
  ];
  return Apartments;
}


export const DESTINITIONS: {
  image: string; 
  cityname: string; 
  id: number;
  countryname: string;
}[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1579017461826-8ea20d5cdb28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzYWJsYW5jYXxlbnwwfHwwfHx8MA%3D%3D',
    cityname: 'Casablanca',
    countryname: 'Morocco',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1538053367502-742497073841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdhZGlyfGVufDB8fDB8fHww',
    cityname: 'Agadir',
    countryname: 'Morocco',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519741641280-af0bfbbb2a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhbmdpZXJ8ZW58MHx8MHx8fDA%3D',
    cityname: 'Tangier',
    countryname: 'Morocco',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1709670507386-c63cb01bccc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyYWtlY2h8ZW58MHwwfDB8fHwy',
    cityname: 'Marakech',
    countryname: 'Morocco',
  },{
    id: 5,
    image: 'https://images.unsplash.com/photo-1512958789358-4effcbe171a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVzfGVufDB8MHwwfHx8Mg%3D%3D',
    cityname: 'Fes',
    countryname: 'Morocco',
  },{
    id: 6,
    image: 'https://images.unsplash.com/photo-1740594372554-68463a09e6a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsZ2VyaWElMjB3YWhyYW58ZW58MHwwfDB8fHwy',
    cityname: 'Wahran',
    countryname: 'Algeria',
  },
];

export const INSPIRATIONS: {
  image: string; 
  cityname: string; 
  id: number;
  countryname: string;
  title: string;
  description: string;
  firstpost?: boolean;
}[] = [
  {
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D',
    cityname: 'Casablanca',
    id: 1,
    firstpost: true,
    countryname: 'Morocco',
    title: '5 best ski towns around the world',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam repellendus ipsa fugit',
  },
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D',
    cityname: 'Marakech',
    id: 2,
    countryname: 'Morocco',
    title: 'The 6 best Orlando hotels for families',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam repellendus ipsa fugit',
  },
  {
    image: 'https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D',
    cityname: 'Fes',
    id: 3,
    countryname: 'Morocco',
    title: 'The 6 best Orlando hotels for families',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam repellendus ipsa fugit',
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D',
    cityname: 'Tangier',
    id: 4,
    countryname: 'Morocco',
    title: 'The 6 best Orlando hotels for families',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam repellendus ipsa fugit',
  },
  {
    image: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MHwwfHx8Mg%3D%3D',
    cityname: 'Agadir',
    id: 5,
    countryname: 'Morocco',
    title: 'The 6 best Orlando hotels for families',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam repellendus ipsa fugit',
  },
]