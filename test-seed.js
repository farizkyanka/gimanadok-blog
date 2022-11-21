const mongoose = require('mongoose');
const Post = require('./models/posts')

// load mongoose
mongoose.connect('mongodb://127.0.0.1:27017/gimanadok');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
})

const seed = async() => {
    await Post.deleteMany({});
    for(let i=0; i<20; i++) {
        const post = new Post({
            title: "Cara baru penggunaan",
            subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora aspernatur voluptas voluptatem similique tenetur libero beatae debitis suscipit error dolores illo blanditiis, cum dolore a minus accusamus aliquam id sint!",
            headerImage: "https://img.freepik.com/premium-vector/female-nutritionist-recommend-healthy-eating-sport_140689-4501.jpg?w=1380",
            author: "superuser",
            datePosted: Date.now(),
            category: "wellness",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente est, quidem velit aut, voluptatem, temporibus delectus minima eos voluptatibus inventore? Tenetur sed fugit quo cumque eius, earum tempore rem. Tempora natus nulla numquam doloribus nemo perspiciatis maiores, ipsa aliquid ipsam omnis, odio, vero cumque. Repellendus maiores rerum aliquam. Incidunt itaque id molestiae nemo est quos cupiditate voluptas optio dolore. Tempore sapiente esse fuga suscipit ducimus impedit provident voluptatem eos. Nesciunt sit sapiente enim perferendis placeat porro iste possimus itaque ipsum dolorem quidem repudiandae, ut voluptas doloremque odit quam optio. Vel, officiis nulla veritatis maiores numquam tenetur ipsam, aspernatur suscipit placeat, omnis quaerat mollitia ullam nesciunt earum ab ex tempora libero iste doloremque incidunt fugit. Sint architecto placeat voluptas nisi. Autem numquam voluptatum aspernatur officiis necessitatibus aliquam magni ex deserunt possimus quos quo voluptatibus provident facere repudiandae laborum nobis corrupti placeat nisi, ea adipisci suscipit dolores recusandae molestiae? Corporis, at? Earum consectetur libero similique, quae optio ducimus beatae, nostrum eveniet doloremque, ut magni nesciunt! Aliquam repellat aperiam, veniam repudiandae eligendi saepe unde dolores eaque accusamus necessitatibus. Exercitationem, autem repellendus. Dolore."
        });
        await post.save();
    }
}

seed()