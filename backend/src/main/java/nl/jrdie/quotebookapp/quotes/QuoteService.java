package nl.jrdie.quotebookapp.quotes;

import nl.jrdie.quotebookapp.entities.QuoteEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteService {

    private final QuoteRepository quoteRepository;

    public QuoteService(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    public List<QuoteEntity> quotesByUser(long userId) {
        return quoteRepository.findAll();
    }

}
