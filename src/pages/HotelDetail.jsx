// import React from "react";
// import { useParams } from "react-router-dom";
// import Breadcrumb from "../components/BreadCrumb";
// import HotelTitle from "../components/HotelTitle";
// import PhotoGallery from "../components/PhotoGallery";
// import AboutSection from "../components/AboutSection";
// import BookingCard from "../components/BookingCard";
// import TreasureSection from "../components/TreasureSection";

// const HotelDetail = () => {
//   const { id } = useParams();

//   return (
//     <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
//       <div className="pt-16 pb-8">
//         <Breadcrumb />
//         <HotelTitle />
//       </div>

//       <PhotoGallery />

//       <div className="flex flex-col lg:flex-row gap-8 mt-12">
//         <div className="flex-1">
//           <AboutSection />
//         </div>
//         <div className="lg:w-96">
//           <BookingCard />
//         </div>
//       </div>

//       <TreasureSection />
//     </main>
//   );
// };

// export default HotelDetail;










// import React from "react";
// import { useParams } from "react-router-dom";
// import Breadcrumb from "../components/BreadCrumb";
// import HotelTitle from "../components/HotelTitle";
// import PhotoGallery from "../components/PhotoGallery";
// import AboutSection from "../components/AboutSection";
// import BookingCard from "../components/BookingCard";
// import TreasureSection from "../components/TreasureSection";

// const hotels = [
//   {
//     id: 1,
//     name: "Blue Origin Farms",
//     location: "Galle, Sri Lanka",
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", // main
//     gallery: [
//       "https://images.unsplash.com/photo-1600585154154-1c1f9ecf3f92?auto=format&fit=crop&w=800&q=80", // room
//       "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", // lobby
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", // dining
//       "https://plus.unsplash.com/premium_photo-1661923857793-f864ba32e92f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=484", // pool
//       "https://images.unsplash.com/photo-1608517907797-d58edb74d082?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//     ],
//   },
//   {
//   id: 2,
//   name: "Ocean Land",
//   location: "Trincomalee, Sri Lanka",
//   image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // main
//   gallery: [
//     "https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470", // room
//     "https://images.unsplash.com/photo-1664917555352-f3f66e57ccc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // lobby
//     "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // dining
//     "https://images.unsplash.com/photo-1731045971022-566f67b7780a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    
//   ],
// },





//   {
//     id: 3,
//     name: "Stark House",
//     location: "Dehiwala, Sri Lanka",
//     image: "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//     gallery: [
//       "https://plus.unsplash.com/premium_photo-1685290652339-ddc5df293b5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387", // room
//       "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1033", // lobby
//       "https://images.unsplash.com/photo-1676089774775-c7dd632e3e07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387", // dining
//       "https://images.unsplash.com/photo-1674216645383-afc4e42c227f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
      
//     ],
//   },
//   {
//     id: 4,
//     name: "Vinna Vill",
//     location: "Beruwala, Sri Lanka",
//     image: "https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=725",
//     gallery: [
//       "https://images.unsplash.com/photo-1628004896019-57bd7296dec5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // room
//       "https://images.unsplash.com/photo-1709755514313-a6a18fc5e81f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470", // lobby
//       "https://images.unsplash.com/photo-1605473203669-00e028079fc3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", // dining
//       "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      
//     ],
//   },
//   {
//     id: 5,
//     name: "Bobox",
//     location: "Kandy, Sri Lanka",
//     image: "https://images.unsplash.com/photo-1719749938395-0fa460e8d3f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//     gallery: [
//       "https://images.unsplash.com/photo-1736553138201-eaa58f37df44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388", // room
//       "https://images.unsplash.com/photo-1633411188840-b96f15990db9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // lobby
//       "https://images.unsplash.com/photo-1737527952538-ac2e174a7023?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869", // dining
//       "https://images.unsplash.com/photo-1600585154207-910dc4f74f8b?auto=format&fit=crop&w=800&q=80", // pool
//       "https://images.unsplash.com/photo-1603951864615-11e5530ce4ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
//     ],
//   },
// {
//     id: 6,
//     name: "Shangri-La",
//     location: "Colombo, Sri Lanka",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661886031345-d14bf4e09a07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374", // main
//     gallery: [
//       "https://plus.unsplash.com/premium_photo-1675615667689-40378da89573?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=939", // room
//       "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", // lobby
//       "https://images.unsplash.com/photo-1726000127379-9ef47b86a5e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // dining
//      "https://images.unsplash.com/photo-1643913592954-3c97690fd3b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//      "https://images.unsplash.com/photo-1636059248938-7c10e794cd12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
//      "https://plus.unsplash.com/premium_photo-1675615667566-9dbdcec5ea2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=830",
//     ],
//   },
//   {
//     id: 7,
//     name: "Top View",
//     location: "Hikkaduwa, Sri Lanka",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=523", // main
//     gallery: [
//       "https://images.unsplash.com/photo-1746549854913-3be88c9e4352?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // room
//       "https://plus.unsplash.com/premium_photo-1661962459469-27479898b31e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=848", // lobby
//       "https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // dining
//       "https://plus.unsplash.com/premium_photo-1661962451694-aa601303b311?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
//       "https://images.unsplash.com/photo-1728488448041-d46c1b2fbfb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//     ],
//   },
//   {
//     id: 8,
//     name: "Green Villa",
//     location: "Kandy, Sri Lanka",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032", // main
//     gallery: [
//       "https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=784", // room
//       "https://plus.unsplash.com/premium_photo-1661925668034-7019cd82306e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=611", // lobby
//       "https://images.unsplash.com/photo-1712488067128-080974f6ab73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580", // dining
//       "https://images.unsplash.com/photo-1729641918332-54ba5cba33a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//       "https://images.unsplash.com/photo-1650532897813-d92427f7d229?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
//     ],
//   },
//   {
//     id: 9,
//     name: "Wooden Pit",
//     location: "Ambalangoda, Sri Lanka",
//     image:
//       "https://images.unsplash.com/photo-1665480893972-be6ea93d8779?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", // main
//     gallery: [
//       "https://images.unsplash.com/photo-1747645906953-d86a968dcb9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // room
//       "https://images.unsplash.com/photo-1720678418766-2628e52f4634?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", // lobby
//       "https://images.unsplash.com/photo-1608514735837-9d7e53b28391?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=844", // dining
//       "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=812",
//       "https://images.unsplash.com/photo-1740446568506-a17623851597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
//     ],
//   },
// {
//       id: 10,
//       name: "Boutiqe",
//       location: "Kandy, Sri Lanka",
//       image: "https://images.unsplash.com/photo-1661258464589-747d9cb1318d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // main
//       gallery: [
//         "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // room
//         "https://images.unsplash.com/photo-1743410976738-180b1f15f339?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // lobby
//         "https://images.unsplash.com/photo-1677129663678-2171fa8a44cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // dining
//         "https://plus.unsplash.com/premium_photo-1661962451694-aa601303b311?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", // pool
//         "https://plus.unsplash.com/premium_photo-1661962706684-cc27ef5f3651?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
//       ],
//     },

//     {
//       id: 11,
//       name: "Modern",
//       location: "Nuwereliya, Sri Lanka",
//       image: "https://images.unsplash.com/photo-1647336811715-d7c7837c50d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160", // main
//       gallery: [
//         "https://plus.unsplash.com/premium_photo-1664299335717-71d868cd964e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", // room
//         "https://plus.unsplash.com/premium_photo-1746888841256-aa28caaf8764?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // lobby
//         "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=921", // dining
//         "https://plus.unsplash.com/premium_photo-1661884424253-08db7c7758ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774", // pool
//         "https://images.unsplash.com/photo-1677129667171-92abd8740fa3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//       ],
//     },

// {
//       id: 12,
//       name: "Silver Rain",
//       location: "Dehiwala, Sri Lanka",
//       image: "https://images.unsplash.com/photo-1685592437742-3b56edb46b15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // main
//       gallery: [
//         "https://images.unsplash.com/photo-1655265173443-4b9ae377f9e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // room
//         "https://plus.unsplash.com/premium_photo-1661938258255-ac0c52834c10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374", // lobby
//         "https://images.unsplash.com/photo-1677129662571-f8a93e03af85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // dining
//         "https://plus.unsplash.com/premium_photo-1663100294038-8a6c24b3b2b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // pool
//         "https://images.unsplash.com/photo-1759038086397-2b7b1535da04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
//       ],
//     },



//     {
//       id: 13,
//       name: "Cashville",
//       location: "Ampara, Sri Lanka",
//       image: "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
//       badge: "Popular Choice",
//       gallery: [
//         "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // room
//         "https://images.unsplash.com/photo-1674168461837-9e2be6a263da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // lobby
//         "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", // dining
//         "https://images.unsplash.com/photo-1715690497118-69f31cf339e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872", // pool
//         "https://plus.unsplash.com/premium_photo-1674480166034-c69619eefdbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=424",
//       ],
//     },

// ];

// const HotelDetail = () => {
//   const { id } = useParams();
//   const hotel = hotels.find((h) => h.id === parseInt(id));

//   if (!hotel) {
//     return <p className="text-center py-20 text-red-500">Hotel not found</p>;
//   }

//   // Combine main image + gallery
//   const allImages = [hotel.image, ...hotel.gallery];

//   return (
//     <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
//       <div className="pt-16 pb-8">
//         <Breadcrumb />
//         <HotelTitle hotel={hotel} />
//       </div>

//       <PhotoGallery images={allImages} />

//       <div className="flex flex-col lg:flex-row gap-8 mt-12">
//         <div className="flex-1">
//           <AboutSection hotel={hotel} />
//         </div>
//         <div className="lg:w-96">
//           <BookingCard hotel={hotel} />
//         </div>
//       </div>

//       <TreasureSection />
//     </main>
//   );
// };

// export default HotelDetail;










import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb";
import HotelTitle from "../components/HotelTitle";
import PhotoGallery from "../components/PhotoGallery";
import AboutSection from "../components/AboutSection";
import BookingCard from "../components/BookingCard";
import TreasureSection from "../components/TreasureSection";

const hotels = [
  {
    id: 1,
    name: "Blue Origin Farms",
    location: "Galle, Sri Lanka",
    price: 5000, // ₹ per day
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154154-1c1f9ecf3f92?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://plus.unsplash.com/premium_photo-1661923857793-f864ba32e92f?auto=format&fit=crop&q=80&w=484",
      "https://images.unsplash.com/photo-1608517907797-d58edb74d082?auto=format&fit=crop&q=80&w=870",
    ],
  },
  {
    id: 2,
    name: "Ocean Land",
    location: "Trincomalee, Sri Lanka",
    price: 6000,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=870",
    gallery: [
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1664917555352-f3f66e57ccc2?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1731045971022-566f67b7780a?auto=format&fit=crop&q=80&w=870",
    ],
  },
  {
    id: 3,
    name: "Stark House",
    location: "Dehiwala, Sri Lanka",
    price: 7500,
    image: "https://images.unsplash.com/photo-1689729771136-46e2ee831b83?auto=format&fit=crop&q=80&w=870",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1685290652339-ddc5df293b5c?auto=format&fit=crop&q=80&w=387",
      "https://images.unsplash.com/photo-1689729738817-fb1f4256769d?auto=format&fit=crop&q=80&w=1033",
      "https://images.unsplash.com/photo-1676089774775-c7dd632e3e07?auto=format&fit=crop&q=80&w=387",
      "https://images.unsplash.com/photo-1674216645383-afc4e42c227f?auto=format&fit=crop&q=80&w=435",
    ],
  },
  {
    id: 4,
    name: "Vinna Vill",
    location: "Beruwala, Sri Lanka",
    price: 8000,
    image: "https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?auto=format&fit=crop&q=80&w=725",
    gallery: [
      "https://images.unsplash.com/photo-1628004896019-57bd7296dec5?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1709755514313-a6a18fc5e81f?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1605473203669-00e028079fc3?auto=format&fit=crop&q=80&w=774",
      "https://images.unsplash.com/photo-1753727471395-5ab19d4f1f6e?auto=format&fit=crop&q=80&w=870",
    ],
  },
  {
    id: 5,
    name: "Bobox",
    location: "Kandy, Sri Lanka",
    price: 5500,
    image: "https://images.unsplash.com/photo-1719749938395-0fa460e8d3f7?auto=format&fit=crop&q=80&w=870",
    gallery: [
      "https://images.unsplash.com/photo-1736553138201-eaa58f37df44?auto=format&fit=crop&q=80&w=388",
      "https://images.unsplash.com/photo-1633411188840-b96f15990db9?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1737527952538-ac2e174a7023?auto=format&fit=crop&q=80&w=869",
      "https://images.unsplash.com/photo-1600585154207-910dc4f74f8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603951864615-11e5530ce4ee?auto=format&fit=crop&q=80&w=774",
    ],
  },
  {
    id: 6,
    name: "Shangri-La",
    location: "Colombo, Sri Lanka",
    price: 25000,
    image: "https://plus.unsplash.com/premium_photo-1661886031345-d14bf4e09a07?auto=format&fit=crop&q=80&w=1374",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1675615667689-40378da89573?auto=format&fit=crop&q=80&w=939",
      "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?auto=format&fit=crop&q=80&w=774",
      "https://images.unsplash.com/photo-1726000127379-9ef47b86a5e4?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1643913592954-3c97690fd3b0?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1636059248938-7c10e794cd12?auto=format&fit=crop&q=80&w=435",
      "https://plus.unsplash.com/premium_photo-1675615667566-9dbdcec5ea2c?auto=format&fit=crop&q=80&w=830",
    ],
  },
  {
    id: 7,
    name: "Top View",
    location: "Hikkaduwa, Sri Lanka",
    price: 20000,
    image: "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?auto=format&fit=crop&q=80&w=523",
    gallery: [
      "https://images.unsplash.com/photo-1746549854913-3be88c9e4352?auto=format&fit=crop&q=80&w=870",
      "https://plus.unsplash.com/premium_photo-1661962459469-27479898b31e?auto=format&fit=crop&q=80&w=848",
      "https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?auto=format&fit=crop&q=80&w=870",
      "https://plus.unsplash.com/premium_photo-1661962451694-aa601303b311?auto=format&fit=crop&q=80&w=774",
      "https://images.unsplash.com/photo-1728488448041-d46c1b2fbfb7?auto=format&fit=crop&q=80&w=870",
    ],
  },
  {
    id: 8,
    name: "Green Villa",
    location: "Kandy, Sri Lanka",
    price: 30000,
    image: "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?auto=format&fit=crop&q=80&w=1032",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?auto=format&fit=crop&q=80&w=784",
      "https://plus.unsplash.com/premium_photo-1661925668034-7019cd82306e?auto=format&fit=crop&q=80&w=611",
      "https://images.unsplash.com/photo-1712488067128-080974f6ab73?auto=format&fit=crop&q=80&w=580",
      "https://images.unsplash.com/photo-1729641918332-54ba5cba33a9?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1650532897813-d92427f7d229?auto=format&fit=crop&q=80&w=1470",
    ],
  },
  {
    id: 9,
    name: "Wooden Pit",
    location: "Ambalangoda, Sri Lanka",
    price: 17000,
    image: "https://images.unsplash.com/photo-1665480893972-be6ea93d8779?auto=format&fit=crop&q=80&w=774",
    gallery: [
      "https://images.unsplash.com/photo-1747645906953-d86a968dcb9c?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1720678418766-2628e52f4634?auto=format&fit=crop&q=80&w=774",
      "https://images.unsplash.com/photo-1608514735837-9d7e53b28391?auto=format&fit=crop&q=80&w=844",
      "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?auto=format&fit=crop&q=80&w=812",
      "https://images.unsplash.com/photo-1740446568506-a17623851597?auto=format&fit=crop&q=80&w=387",
    ],
  },
  {
    id: 10,
    name: "Boutique",
    location: "Kandy, Sri Lanka",
    price: 20000,
    image: "https://images.unsplash.com/photo-1661258464589-747d9cb1318d?auto=format&fit=crop&q=80&w=870",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1743410976738-180b1f15f339?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1677129663678-2171fa8a44cb?auto=format&fit=crop&q=80&w=870",
      "https://plus.unsplash.com/premium_photo-1661962451694-aa601303b311?auto=format&fit=crop&q=80&w=774",
      "https://plus.unsplash.com/premium_photo-1661962706684-cc27ef5f3651?auto=format&fit=crop&q=80&w=580",
    ],
  },
  {
    id: 11,
    name: "Modern",
    location: "Nuwereliya, Sri Lanka",
    price: 22000,
    image: "https://images.unsplash.com/photo-1647336811715-d7c7837c50d9?auto=format&fit=crop&q=80&w=1160",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1664299335717-71d868cd964e?auto=format&fit=crop&q=80&w=774",
      "https://plus.unsplash.com/premium_photo-1746888841256-aa28caaf8764?auto=format&fit=crop&q=80&w=870",
      "https://plus.unsplash.com/premium_photo-1661907977530-eb64ddbfb88a?auto=format&fit=crop&q=80&w=921",
      "https://plus.unsplash.com/premium_photo-1661884424253-08db7c7758ce?auto=format&fit=crop&q=80&w=774",
      "https://images.unsplash.com/photo-1677129667171-92abd8740fa3?auto=format&fit=crop&q=80&w=870",
    ],
  },
  {
    id: 12,
    name: "Silver Rain",
    location: "Dehiwala, Sri Lanka",
    price: 24000,
    image: "https://images.unsplash.com/photo-1685592437742-3b56edb46b15?auto=format&fit=crop&q=80&w=870",
    gallery: [
      "https://images.unsplash.com/photo-1655265173443-4b9ae377f9e6?auto=format&fit=crop&q=80&w=870",
      "https://plus.unsplash.com/premium_photo-1661938258255-ac0c52834c10?auto=format&fit=crop&q=80&w=1374",
      "https://images.unsplash.com/photo-1677129662571-f8a93e03af85?auto=format&fit=crop&q=80&w=870",
      "https://plus.unsplash.com/premium_photo-1663100294038-8a6c24b3b2b1?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1759038086397-2b7b1535da04?auto=format&fit=crop&q=80&w=774",
    ],
  },
  {
    id: 13,
    name: "Cashville",
    location: "Ampara, Sri Lanka",
    price: 25000,
    image: "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?auto=format&fit=crop&q=80&w=870",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1674168461837-9e2be6a263da?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1715690497118-69f31cf339e5?auto=format&fit=crop&q=80&w=872",
      "https://plus.unsplash.com/premium_photo-1674480166034-c69619eefdbf?auto=format&fit=crop&q=80&w=424",
    ],
  },
];

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <p className="text-center py-20 text-red-500">Hotel not found</p>;
  }

  const allImages = [hotel.image, ...hotel.gallery];

  return (
    <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
      {/* 🔙 Sticky Back to Home Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 px-4 flex justify-between items-center shadow-sm">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary font-medium bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-2 rounded-lg shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </button>

        <h2 className="text-lg font-semibold text-primary hidden sm:block">
          {hotel.name}
        </h2>
      </div>

      {/* 🏨 Hotel Details */}
      <div className="pt-8 pb-8">
        <Breadcrumb />
        <HotelTitle hotel={hotel} />
      </div>

      <PhotoGallery images={allImages} />

      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        <div className="flex-1">
          <AboutSection hotel={hotel} />
        </div>
        <div className="lg:w-96">
          <BookingCard hotel={hotel} />
        </div>
      </div>

      <TreasureSection />
    </main>
  );
};

export default HotelDetail;

















// import React from "react";
// import { useParams } from "react-router-dom";
// import Breadcrumb from "../components/BreadCrumb";
// import HotelTitle from "../components/HotelTitle";
// import PhotoGallery from "../components/PhotoGallery";
// import AboutSection from "../components/AboutSection";
// import BookingCard from "../components/BookingCard";
// import TreasureSection from "../components/TreasureSection";

// const hotels = [
//   {
//     id: 1,
//     name: "Blue Origin Farms",
//     location: "Galle, Sri Lanka",
//     image: "/images/hotel1-main.jpg",
//     gallery: [
//       "/images/hotel1-1.jpg",
//       "/images/hotel1-2.jpg",
//       "/images/hotel1-3.jpg",
//     ],
//   },
//   {
//     id: 2,
//     name: "Ocean Land",
//     location: "Trincomalee, Sri Lanka",
//     image: "/images/hotel2-main.jpg",
//     gallery: [
//       "/images/hotel2-1.jpg",
//       "/images/hotel2-2.jpg",
//       "/images/hotel2-3.jpg",
//     ],
//   },
//   {
//     id: 3,
//     name: "Stark House",
//     location: "Dehiwala, Sri Lanka",
//     image: "/images/hotel3-main.jpg",
//     gallery: [
//       "/images/hotel3-1.jpg",
//       "/images/hotel3-2.jpg",
//       "/images/hotel3-3.jpg",
//     ],
//   },
//   {
//     id: 4,
//     name: "Vinna Vill",
//     location: "Beruwala, Sri Lanka",
//     image: "/images/hotel4-main.jpg",
//     gallery: [
//       "/images/hotel4-1.jpg",
//       "/images/hotel4-2.jpg",
//       "/images/hotel4-3.jpg",
//     ],
//   },
//   {
//     id: 5,
//     name: "Bobox",
//     location: "Kandy, Sri Lanka",
//     image: "/images/hotel5-main.jpg",
//     gallery: [
//       "/images/hotel5-1.jpg",
//       "/images/hotel5-2.jpg",
//       "/images/hotel5-3.jpg",
//     ],
//   },
// ];


// const HotelDetail = () => {
//   const { id } = useParams();
//   const hotel = hotels.find((h) => h.id === parseInt(id));

//   if (!hotel) {
//     return <p className="text-center py-20 text-red-500">Hotel not found</p>;
//   }

//   // Combine main image + gallery
//   const allImages = [hotel.image, ...hotel.gallery];

//   return (
//     <main className="max-w-screen-xl mx-auto px-4 lg:px-0 mt-16">
//       <div className="pt-16 pb-8">
//         <Breadcrumb />
//         <HotelTitle hotel={hotel} />
//       </div>

//       {/* Pass combined images to PhotoGallery */}
//       <PhotoGallery images={allImages} />

//       <div className="flex flex-col lg:flex-row gap-8 mt-12">
//         <div className="flex-1">
//           <AboutSection hotel={hotel} />
//         </div>
//         <div className="lg:w-96">
//           <BookingCard hotel={hotel} />
//         </div>
//       </div>

//       <TreasureSection />
//     </main>
//   );
// };

// export default HotelDetail;

