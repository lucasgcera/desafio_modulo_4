export default (mongoose) => {
    //criacao do modelo
    const schema = mongoose.Schema({
        name: {
            type: String,
            require: true,
        },
        subject: {
            type: String,
            require: true,
        },
        type: {
            type: String,
            require: true,
        },
        value: {
            type: Number,
            require: true,
            min: 0,
        },
        lastModified: {
            type: Date,
            default: Date.now,
        },
    });

    //definindo o modelo da colecao
    const Student = mongoose.model('students', schema);
    return Student;
};
