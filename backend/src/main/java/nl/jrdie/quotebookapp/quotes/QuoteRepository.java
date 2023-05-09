package nl.jrdie.quotebookapp.quotes;

import nl.jrdie.quotebookapp.entities.QuoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuoteRepository extends JpaRepository<QuoteEntity, Long> {}
