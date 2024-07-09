import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex-col sm:flex-row'>
			<Sidebar className=' h-1/2'/>
			<MessageContainer className=' h-1/2'/>
		</div>
	);
};
export default Home;
