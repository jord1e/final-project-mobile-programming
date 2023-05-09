package nl.jrdie.quotebookapp.quotes;

import nl.jrdie.quotebookapp.entities.QuoteListEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuoteListRepository extends JpaRepository<QuoteListEntity, Long> {}
