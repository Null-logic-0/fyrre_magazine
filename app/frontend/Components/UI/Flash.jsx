import toast from "react-hot-toast";
import {useEffect} from "react";


export default function Flash({flash}) {

	useEffect(() => {
		if (!flash) return;
		if (flash.notice) toast.success(flash.notice);
		if (flash.alert) toast.error(flash.alert);
	}, [flash]);

	return null;
}

