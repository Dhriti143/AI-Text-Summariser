async function summarizeText() {
    const inputText = document.getElementById("inputText").value;

    if (!inputText.trim()) {
        alert("Please enter some text to summarize.");
        return;
    }

    try {
        const response = await fetch('/api/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        });

        const data = await response.json();
        document.getElementById("summaryText").value = data.summary;
    } catch (error) {
        console.error("Error summarizing the text:", error);
        alert("Something went wrong while summarizing. Please try again.");
    }
}
