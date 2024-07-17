import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const ProjectModal = ({ project, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setDescription(project.description || '');
        }
    }, [project]);

    const handleSave = () => {
        onSave({ ...project, title, description });
        onClose();
    };

    if (!project) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded p-4 w-96">
            <h2 className="text-2xl font-bold mb-4 text-black">Edit Project</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold">Project Name</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
ProjectModal.propTypes = {
    project: PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};
export default ProjectModal;
