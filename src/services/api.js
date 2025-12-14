import { collection, getDocs, doc, getDoc, orderBy, query } from "firebase/firestore";
import { db } from "./firebase.js";

export const getProfile = async () => {
    try{
        const docRef = doc(db, "home", "main");
        const docSnap =  await getDoc(docRef);

        if(docSnap.exists()){
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting document:", error);
        throw error;
    }
};

export const getSkills = async () => {
    try{
        const querySnapshot = await getDocs(collection(db, "skills"));
        const skills = {frontend: [], backend: [], education: null};

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if(data.category && data.skills){
                const categoryKey = data.category.toLowerCase();
                skills[categoryKey] = data.skills;
            }

            if(data.course || doc.id === "education"){
                skills.education = data;
            }
        });
        return skills;
    } catch (error) {
        console.error("Error getting skills:", error);
        throw error;
    }
};

export const getProjects = async () => {
    try{
        const q = query(collection(db, "projects"), orderBy('order'));
        const querySnapshot = await getDocs(q);
        const projects = [];

        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        return projects;
    } catch (error) {
        console.error("Error getting projects:", error);
        throw error;
    }
};

export const getCertifications = async () => {
    try{
        const q = query(collection(db, "certifications"), orderBy('order'));
        const querySnapshot = await getDocs(q);
        const certifications = [];

        querySnapshot.forEach((doc) => {
            certifications.push({ id: doc.id, ...doc.data() });
        });
        return certifications;
    } catch (error) {
        console.error("Error getting certifications:", error);
        throw error;
    }
}

export const getWorkExperience = async () => {
    try{
        const q = query(collection(db, "workExperience"), orderBy('order'));
        const querySnapshot = await getDocs(q);
        const workExperience = [];

        querySnapshot.forEach((doc) => {
            workExperience.push({ id: doc.id, ...doc.data() });
        });
        return workExperience;
    } catch (error) {
        console.error("Error getting work experience:", error);
        throw error;
    }
}
    
